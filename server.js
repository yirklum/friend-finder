// Set up dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express and identify port
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded ({ extended: true }));
app.use(bodyParser.json());

//Get style.css, etc
app.use(express.static("app/public"));

// Connect routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// require("./app/data/friends");

// Make the server begin listening
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});