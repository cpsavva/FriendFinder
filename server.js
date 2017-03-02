/*requiring npm packages */

const express = require('express');
const body-parser = require('body-parser');
const path = require('path');

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