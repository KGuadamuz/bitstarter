var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var response = require('fs');
var data = fs.readFileSync("index.html", "utf8");


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
