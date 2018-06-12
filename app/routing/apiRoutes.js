
// Get dependencies
var path = require("path");
var friends = require("../data/friends.js");

// Export routes
module.exports = function(app) {

    // Display all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Compare score arrays and find best match
    app.post("/api/friends", function(req, res) {
        
        // Get user input and set up variables
        var friendMatch = {
            name: "",
            photo: "",
            difference: 1000
        };
        var newFriend = req.body;
        var userScore = newFriend.scores;
        var totalDifference = 0;

        // Loop through the possible matches in the array
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);

            totalDifference = 0;

            // Determine absolute differences between scores of user and possible matches
            for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));
                // console.log("difference = " + totalDifference);
            
                // Find the smallest difference and, thus, the best match
                if (totalDifference <= friendMatch.difference) {
                    // console.log("Closest match found = " + difference);
                    console.log("Friend name = " + friends[i].name);
                    console.log("Friend image = " + friends[i].photo);

                    friendMatch.name = friends[i].name;
                    friendMatch.photo = friends[i].photo;
                    friendMatch.difference = totalDifference;
                    console.log(friendMatch.name);
                }
            }
        }

        // Add new user to the array
        friends.push(newFriend);

        // Return new match
        res.json(friendMatch);
    });  
};