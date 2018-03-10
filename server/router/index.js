const Router = require('express').Router();
const redis = require('redis');

//create Redis client
let client = redis.createClient();

client.on('connect', () => {
  console.log('Connected to Redis!');
});



Router.get('/', (req, res) => {
  let payload = {message: "hit the api"};
  
  res.send(payload);
});

Router.post('/user/search', (req, res) => {
  console.log("hit the post route")
  let id = req.body.id
  
  client.hgetall(id, (err, obj) => {
    if(!obj) {
      console.log("Redis found an error ", err);
      res.send({error: "User does not exist."});
    } else {
      obj.id = id;
      res.send(obj);
    }
  });
});


module.exports = Router;