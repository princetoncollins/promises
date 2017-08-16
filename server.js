// Dependencies.

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 9001;

// app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
// app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(port, function() {
  console.log('Listening on port: ', port);
});
