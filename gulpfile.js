'use strict';

var fs = require('fs');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var basedir = global.process.env.INIT_CWD;
var config_file = basedir + '/gulp.config.js';
var config;

function getTask(task, done) {
  return require(config.paths.tasks + '/' + task)(gulp, plugins, config, done);
}

try {
  // does the configuration file exist?
  fs.statSync(config_file);
} catch (e) {
  if (e.code == 'ENOENT') {
    var message = plugins.util.colors.red('!!! No configuration file found !!!');
    plugins.util.log(message);
  }
}

// load configuration
config = require(config_file);
config.files.config = config_file;

// create gulp tasks once configuration has loaded
gulp.task('clean',             function (done) { return getTask('clean', done); });
gulp.task('clear-cache',       function (done) { return getTask('clear-cache', done); });
gulp.task('images',            getTask('images'));
gulp.task('scripts',           getTask('scripts'));
gulp.task('styles',            getTask('styles'));
gulp.task('watch',             getTask('watch'));

gulp.task('build', function(callback) {
  runSequence('clean', ['styles', 'scripts'], 'images', callback);
});

gulp.task('build-watch', function(callback) {
  runSequence('build', 'watch', callback);
});

gulp.task('default', ['build-watch']);
