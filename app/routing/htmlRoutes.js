
// Set up dependencies
var path = require("path");

// Export routes
module.exports = function(app) {

    // Route to homepage
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Route to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}