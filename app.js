// imports
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());

//var key =AIzaSyCA83VqJrlfyfa4gyCiivTWUqruW87FNeI

app.post('/api', function(req, res) {
  var location = req.body;
  res.json(req.body);
});

const PORT = 1337;

app.listen(PORT, function(){
  console.log('Server started on port ' + PORT + '...');
})
