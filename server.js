// Set up dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded ({ extended: true }));
app.use(bodyParser.json());

// Data