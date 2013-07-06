var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
fs.readFile('./index.hmtl', 'utf-8', function (error, data) {

response.writeHead(200. {
'content-Type': 'text/plain'

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
