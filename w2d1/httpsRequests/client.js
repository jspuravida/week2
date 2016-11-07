const https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');


    response.on('data', function (data) {
      console.log("The length of this chunk is: " + data.length + '\n');
    });


    response.on('end', () => {
      console.log("Stream is finished.");
    });

  });
}

getAndPrintHTMLChunks();
