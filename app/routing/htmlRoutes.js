/*need path to set direct the routes */
const path = require('path');


/*Setting up routes */
module.exports = function (app){

	app.get('/survey', function(request, response){
		console.log("made it to the survey page")
		response.sendFile(path.join(__dirname, "./../public/survey.html"))
	});

	app.get('/home', function(request, response){
		console.log('made it to the home page')
		response.sendFile(path.join(__dirname, './../public/home.html'))
	});

	 app.use(function(request, response) {
	 	console.log('defaulted to home page')
    response.sendFile(path.join(__dirname, "./../public/home.html"));
 	 });

};
