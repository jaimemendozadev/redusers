const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const redis = require('redis');

const public = path.resolve(__dirname, '../public');

console.log("public ", public)
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api', (req, res) => {
  let payload = {message: "hit the api"};

  res.send(payload);
});

module.exports = app;