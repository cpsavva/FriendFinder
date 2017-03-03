/* obtain json list of survey results and friend data */

const friendData = require('../data/friends');



module.exports = function(app){


	app.get('/api/friends', function(request, response){
		response.json(friendData);
	})


	app.post('/api/friends', function(request, response){
		friendData.push(request.body);
	})
}