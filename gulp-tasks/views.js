module.exports = function (gulp, plugins, config) {
 return function () {
    gulp.src(config.paths.public + '/' + config.files.src.views)
      .pipe(plugins.plumber(config.plugins.plumber))
      .pipe(plugins.fileInclude(config.plugins.fileInclude))
      .pipe(plugins.rename(config.files.dist.views))
      .pipe(gulp.dest(config.paths.public))
      .pipe(plugins.livereload(config.plugins.livereload));
  };
};
