const http = require('http');


http.get('http://example.com/', (httpResponse) => {
httpResponse

httpResponse.setEnconding('utf8');



let rawData = '';


httpResponse.on('data', (chunk) => {
  rawData += chunk;
})

// set a header in the request for git hub exercise.

httpResponse.on('end', () => {
  console.log(rawData);
})