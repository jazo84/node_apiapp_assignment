module.exports = (argThree) => {
  var search = require('youtube-search');
  var opts = {
    maxResults: 5,
    key: 'AIzaSyD3En9-PH688GEzHDyla4a02hJwzHvXUYk'
  };
  search(argThree, opts, function (err, results) {
    if(err) return console.log(err);
    console.log("Video Title:" + results[0].title);
    console.log("Channel Title:" + results[0].channelTitle);
    console.log("Video Description:" + results[0].description);
    console.log("Video Link:" + results[0].link);
  });
}
