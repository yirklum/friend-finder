// Set up dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded ({ extended: true }));
app.use(bodyParser.json());




// Make the server begin listening
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});