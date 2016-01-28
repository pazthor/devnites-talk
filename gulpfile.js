'use strict';

var gulp    = require('gulp'),
    ghPages = require('gulp-gh-pages'),
    sass    = require('gulp-sass');

gulp.task('deploy', ['copy'], function() {
  gulp.src('./dist/**/*')
  .pipe(ghPages());
});


gulp.task('copy', function() {
  return gulp.src('./index.html')
  .pipe(gulp.dest('./dist'));

  gulp.src('./img/**/*')
  .pipe(gulp.dest('./dist/img'));
});

gulp.task('sass', function() {
  return gulp.src('./style.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./*.sass', ['sass']);
});
