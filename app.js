const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

require('./config/routes')(app)
require('./config/express')(app)

listen();

function listen () {
	app.listen(port);
	console.log('Express started on port ' + port)
}

module.exports = app;
