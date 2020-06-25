var express = require('express');
var welcome = require('./routes/welcome');
var skills = require('./routes/skills')

var app = express();

app.use('/welcome', welcome);
app.use('/skills', skills);

module.exports = app;
