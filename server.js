var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 5000;
var httpStatus = require('http-status-codes');
var userRoutes = require('./controllers/users');

var app = express();

// Middleware
app.use(bodyParser.json());

// User Routes
app.use('/users', userRoutes);

app.use('*', function(req, res) {
  res.status(httpStatus.NOT_FOUND).send('Invalid endpoint or REST action');
});

console.log('Listening on port: ' + port);
app.listen(port);
