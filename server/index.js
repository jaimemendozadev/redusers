const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const redis = require('redis');

//create Redis client

let client = redis.createClient();

client.on('connect', () => {
  console.log('Connected to Redis!');
});

const public = path.resolve(__dirname, '../public');

console.log("public ", public)
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api', (req, res) => {
  let payload = {message: "hit the api"};

  res.send(payload);
});

app.post('/api/user/search', (req, res) => {
  let id = req.body.id

  client.hgetall(id, (err, obj) => {
    if(!obj) {
      res.send({error: "User does not exist."});
    } else {
      obj.id = id;
      res.send(obj);
    }


  });
});

module.exports = app;
