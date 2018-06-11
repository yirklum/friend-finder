
// Get dependencies
var path = require("path");
var friends = require("../data/friends");

// Export routes
module.exports = function(app) {

    // Display all possible friends
    app.get("/api/friends", function(req, res) {
    return res.json(friends);
    });

    // Compare score arrays and find best match
    app.post("/api/friends", function(req, res) {
        
        // Set up match object and other variables
        var friendMatch = {
            name: "",
            photo: "",
            totalDifference: 1000
        };

        var newFriend = req.body;
        console.log("newFriend = " + JSON.stringify(newFriend));
        var userInput = newFriend.scores;
        console.log("userInput = " + userInput);
        var difference = 0;

        // Loop through the possible matches in the array
        for (var i = 0; i < [friends].length; i++) {
            console.log("friend = " + JSON.stringify(friends[i]));

            // Determine absolute differences between scores of user and possible matches
            for (var j = 0; j < userInput.length; j++) {
                difference += Math.abs(userInput[j] - friends[i].scores[j]);
            }
            console.log("difference = " + difference);

            // Find the smallest difference and, thus, the best match
            if (difference <= friendMatch.totalDifference) {
                console.log("Closest match found = " + difference);
                console.log("Friend name = " + friends[i].name);
                
                friendMatch.name = friends[i].name;
                friendMatch.photo = friends[i].photo;
                friendMatch.totalDifference = difference;
                console.log(friendMatch);
            }
        }
        // Add new user to the array
        friends.push(newFriend);

        // Return new match
        res.json(friendMatch);
    });  
};



// newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
// console.log(newFriend);
// res.json(newFriend);
