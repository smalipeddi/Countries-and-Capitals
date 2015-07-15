// Include gulp
var gulp = require('gulp'); 
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var clean = require('gulp-clean');

//inside of Gulpfile.js
var gulp = require('gulp');



var connect = require('gulp-connect');
gulp.task('connect', function() {
  connect.server();
});

gulp.task('default', ['connect']);