const https = require('https');


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  let rawData = '';

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');


    response.on('data', function (data) {
      rawData += data;
      console.log("The length of this chunk is: " + data.length + '\n');

    });


    response.on('end', () => {
      console.log("Stream is finished.");
    });

  });
}

getAndPrintHTML ();

