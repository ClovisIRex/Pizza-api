// imports
var requestify = require('requestify');



//Google api key for querying their Places API service

const GOOGLE_KEY = 'AIzaSyCA83VqJrlfyfa4gyCiivTWUqruW87FNeI';
const GOOGLE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=${GOOGLE_KEY}`;


exports.getPizzaLocations = function() {
  var result = requestify.get(GOOGLE_URL).then(function(response) {
    response.getBody();
  });
  return result;
};
