var express = require('express');

var app = express.createServer(express.logger());

// get file system
var fs = require('fs');
// fs.readFileSync(filename, option)
// with    option fs.readFileSync return a string
// without option fs.readFileSync return a buffer
// get index.html as a buffer not a string
var index = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(index.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
