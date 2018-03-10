const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const Router = require('./router');


const public = path.resolve(__dirname, '../public');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', Router);



module.exports = app;
