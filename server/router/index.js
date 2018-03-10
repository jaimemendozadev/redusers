const Router = require('express').Router();
const redis = require('redis');

//create Redis client
let client = redis.createClient();

client.on('connect', () => {
  console.log('Connected to Redis!');
});

console.log("client is ", client)


Router.get('/', (req, res) => {
  let payload = {message: "hit the api"};
  
  res.send(payload);
});

Router.post('/user/search', (req, res) => {
  console.log("hit the post route", req.body);

  const {id} = req.body;

  console.log("the id from React is ", req.body.id)
  
  client.hgetall(id, (err, obj) => {
    if(!obj) {
      console.log("Redis found an error ", err);
      res.send({error: "User does not exist."});
    } else {
      res.send({user: obj});
    }
  });
});

Router.post('/user/add', (req, res) => {
  const {id, name, email, phone} = req.body;
  
  client.hmset(id, [
    'name', name,
    'email', email,
    'phone', phone
  ], (err, reply)=>{
    if(err){
      console.log('There was an error saving the payload in Redis ', err);
      res.send({error: err});
    }

    console.log('User successfully saved in Redis ', reply);

    res.send(reply);
  });


});


module.exports = Router;