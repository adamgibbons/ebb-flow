var gulp = require('gulp');
var clean = require('gulp-clean');
var webpack = require('gulp-webpack');
var less = require('gulp-less');

var DEST = 'dist/';

gulp.task('clean', function() {
  return gulp.src(DEST).pipe(clean());
});

gulp.task('copy', function() {
  var targetFiles = ['public/index.html'];
  return gulp.src(targetFiles)
    .pipe(gulp.dest(DEST));
});

gulp.task('styles', function() {
  gulp.src('public/styles.less')
    .pipe(less())
    .pipe(gulp.dest(DEST));
});

gulp.task('scripts', function() {
  var webpackOptions = require('./webpack.config.js');

  return gulp.src('./public/index.js')
    .pipe(webpack(webpackOptions))
    .pipe(gulp.dest(DEST));
});

gulp.task('build', ['clean', 'scripts', 'styles', 'copy']);

gulp.task('default', ['build']);