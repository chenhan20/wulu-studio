const index = require('../routes/index');
const users = require('../routes/users');
const wulu = require('../routes/wulu');

module.exports = function (app) {
	app.use('/', index);
	app.use('/users', users);
	app.use('/wulu', wulu);
}