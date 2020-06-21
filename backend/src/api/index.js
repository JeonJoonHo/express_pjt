var express = require('express');
var welcome = require('./routes/welcome');
var users = require('./routes/users');

var app = express();

app.use('/welcome', welcome);
app.use('/users', users);

module.exports = app;
