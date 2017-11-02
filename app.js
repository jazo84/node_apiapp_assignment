var importFunc = require('./yelp.js');
var importFunc2 = require ('./youtube.js');
var importFunc3 = require('./geocoder.js');
var command = process.argv[2];

if(command === "yelp"){
  importFunc(process.argv[3], process.argv[4]);
} else if (command === "youtube") {
  importFunc2 (process.argv[3]);
} else if (command === "geocoder") {
  importFunc3 (process.argv[3]);
} else {
  console.log("Please enter a valid App Name");
}
