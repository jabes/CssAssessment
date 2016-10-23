module.exports = function (gulp, plugins, config) {
  return function () {
    gulp.src(config.files.src.styles)
      .pipe(plugins.plumber(config.plugins.plumber))
      .pipe(plugins.sass(config.plugins.sass))
      .pipe(plugins.autoprefixer(config.plugins.autoprefixer))
      .pipe(plugins.concat(config.files.dist.styles))
      .pipe(gulp.dest(config.paths.dist.styles))
      .pipe(plugins.rename(config.plugins.rename))
      .pipe(plugins.cssnano(config.plugins.cssnano))
      .pipe(gulp.dest(config.paths.dist.styles))
      .pipe(plugins.livereload(config.plugins.livereload));
  };
};
