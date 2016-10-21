module.exports = function (gulp, plugins, config) {
  return function () {
    // Start the livereload server
    plugins.livereload.listen(config.plugins.livereload);
    // Watch assets to trigger build tasks
    plugins.watch(
      config.match.src.styles,
      config.plugins.watch,
      plugins.batch(function (events, done) {
        gulp.start('styles', done);
      }));
    plugins.watch(
      config.match.src.scripts,
      config.plugins.watch,
      plugins.batch(function (events, done) {
        gulp.start('scripts', done);
      }));
    // Watch build files to trigger livereload
    plugins.watch([
        config.match.dist.styles,
        config.match.dist.scripts
      ],
      config.plugins.watch,
      function (file) {
        plugins.livereload.changed(file);
      });
  };
};
