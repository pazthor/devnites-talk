'use strict';

var gulp    = require('gulp'),
    ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  var files = ['./index.html', './img/**/*'];
  gulp.src(files)
  .pipe(ghPages());
});
