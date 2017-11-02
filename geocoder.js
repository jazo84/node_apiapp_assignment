  module.exports = (argThree) => {
    var geocoder = require('geocoder');
    geocoder.geocode(argThree, function (error, data) {
      console.log("Location Name:" + data.results[0].address_components.long_name);
      console.log("Address:" + data.results[0].formatted_address);
      console.log("Place Id:" + data.results[0].place_id);
      console.log("Location type:" + data.results[0].types);
    })
  }
