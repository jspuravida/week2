const https = require('https');

module.exports = function getHTML (options, callback) {

  var otherObject = {};
  otherObject.host = options.host;
  otherObject.path = options.path;


  let rawData = '';

  https.get(otherObject, function (response) {
    response.setEncoding('utf8');


    response.on('data', function (data) {
      rawData += data;
      console.log("The length of this chunk is: " + data.length + '\n');

    });

    response.on('end', function () {
      callback(rawData);
      console.log("Complete");
    });

    response.on('error', function(err) {
      console.log(err.stack);
    });


  });
};
}