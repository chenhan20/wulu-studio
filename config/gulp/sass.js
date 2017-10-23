const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./public/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/sass/*.sass', ['sass']);
});
