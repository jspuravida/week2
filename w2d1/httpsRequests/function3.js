const https = require('https');


function getAndPrintHTML (options) {

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

    response.on('end', () => {
      console.log("Stream is finished.");
      console.log(rawData);
    });

    response.on('error', function(err) {
      console.log(err.stack);
    });


  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML (requestOptions);


