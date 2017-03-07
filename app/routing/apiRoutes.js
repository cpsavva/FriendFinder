/*need path to set direct the routes */
const path = require('path');

/* obtain json list of survey results and friend data */

const friendData = require('../data/friends');



module.exports = function(app){


	app.get('/api/friends', function(request, response){
		console.log('hello world');
		response.json(friendData);
	})

	app.post('/api/friends', function(request, response){
		friendData.push(request.body);
		console.log(request.body)
	})
}