module.exports = function (gulp, plugins, config) {
  return function () {
    gulp.src(config.files.src.scripts)
      .pipe(plugins.plumber(config.plugins.plumber))
      .pipe(plugins.jshint(config.files.jshintrc))
      .pipe(plugins.jshint.reporter(require('jshint-stylish')))
      .pipe(plugins.concat(config.files.dist.scripts))
      .pipe(plugins.babel(config.plugins.babel))
      .pipe(gulp.dest(config.paths.dist.scripts))
      .pipe(plugins.rename(config.plugins.rename))
      .pipe(plugins.uglify(config.plugins.uglify))
      .pipe(gulp.dest(config.paths.dist.scripts))
      .pipe(plugins.livereload(config.plugins.livereload));
  };
};
