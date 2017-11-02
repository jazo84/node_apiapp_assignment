module.exports = (argTwo, argThree) => {
  var clientId = "Y5dRHMjgzYE1O2MG3Ay1QA";
  var clientSecret = "MHxP6HyKKTUh3Z5WLFeTFD19l3PV7VcKBXvTRvJhVEho4OodMaRgi3jYIztt8xcI";
  const yelp = require('yelp-fusion');
  const token = yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);
  client.search({
    term: argTwo,
    location: argThree,
  }).then(response => {
    console.log("Name:" + response.jsonBody.businesses[0].name);
    console.log("Review Count:" + response.jsonBody.businesses[0].review_count);
    console.log("Rating:" + response.jsonBody.businesses[0].rating);
    console.log("Address:" + response.jsonBody.businesses[0].location.display_address);
  }).catch(e => {
    console.log(e);
  });
  }).catch(e => {
    console.log(e);
  });
}
