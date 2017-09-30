const gulp = require('gulp');
const nodemon = require('nodemon');

gulp.task('dev:server', function () {
	nodemon({
		script: 'app.js',
		ext: 'js',
	});
});