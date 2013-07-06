var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send());
});

var response.send = fs.readFile('./index.hmtl', function read(err, data) {

if (err) {

throw err;
}


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
