// imports
var express = require('express');
var bodyParser = require('body-parser');
var LocationService = require('./LocationService.js');

var app = express();

app.use(bodyParser.json());

//Sends usage upon get

app.get('/', function(req, res) {
  res.send("Usage: send POST with your location as JSON text to /api");
});


/*
Main api service - we get a JSON which contains location params as described by google,
then we forward that to google places api service and send back pizza locations to the client as JSON
*/
app.post('/api', function(req, res) {
  var location = req.body;
  res.json((LocationService.getPizzaLocations()));
});

const PORT = 1337;

app.listen(PORT, function(){
  console.log('Server started on port ' + PORT + '...');
})
