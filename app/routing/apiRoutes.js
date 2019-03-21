var friends = require('../data/friends.js');
var path = require("path");

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
        var formVals = req.body;
        
		var responses = formVals.scores;
		var matchName = '';
		var matchImage = '';
		var bigDiff = 9000;
		for (var i = 0; i < friends.length; i++) {
			var diff = 0;
			for (var j = 0; j < responses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - responses[j]);
			}

			if (diff < bigDiff) {
				bigDiff = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
        }
        friends.push(formVals);
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};