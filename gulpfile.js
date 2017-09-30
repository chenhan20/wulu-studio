const fs = require('fs');
const gulp = require('gulp');
const join = require('path').join;

const tasks = join(__dirname, 'config/gulp');

fs.readdirSync(tasks)
	.filter(task => ~task.search(/^[^\.].*\.js$/))
	.forEach(task => require(join(tasks, task)));

gulp.task('dev', ['dev:server']);