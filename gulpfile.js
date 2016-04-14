'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

gulp.task('lint', function () {

  return gulp.src(['index.js', 'tests/*.js', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

});

gulp.task('test', function () {

  gulp.src('tests/*.js', {read: false})
    .pipe(mocha());

});

gulp.task('default', ['lint', 'test']);
