/*requiring npm packages */

const express = require('express');
const bodyParser = require('body-parser');


/* initialising express and assigning port */
const app = express();
const port = 3000;

/*Sets up the Express app to handle data parsing*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

/* for use of css files */
app.use(express.static(__dirname + '/app/public'));
app.use(express.static(__dirname + '/app/data'));


/* obtaining the routes js files */
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


/*starting the server */
app.listen(port, function(){
	console.log("I am working. My port is: " + port)
})