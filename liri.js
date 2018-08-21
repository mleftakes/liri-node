require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js");


var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);



// * `my-tweets`

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

// * `spotify-this-song`



var Spotify = require('node-spotify-api');

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
 


// * `movie-this`

// * `do-what-it-says`

