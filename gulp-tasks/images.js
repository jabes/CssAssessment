module.exports = function (gulp, plugins, config) {
  return function () {
    gulp.src(config.match.src.images)
      .pipe(plugins.cache(plugins.imagemin(config.imagemin)))
      .pipe(gulp.dest(config.paths.dist.images));
  };
};
