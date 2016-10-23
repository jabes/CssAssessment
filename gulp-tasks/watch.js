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
    plugins.watch(
      config.match.src.views.files,
      config.plugins.watch,
      plugins.batch(function (events, done) {
        gulp.start('views', done);
      }));
    plugins.watch(
      config.match.src.views.paths,
      config.plugins.watch,
      plugins.batch(function (events, done) {
        gulp.start('views', done);
      }));
    plugins.watch(
      config.match.src.images,
      config.plugins.watch,
      plugins.batch(function (events, done) {
        gulp.start('images', done);
      }));
    // Watch build files to trigger livereload
    plugins.watch([
      config.match.dist.views.files,
      config.match.dist.views.paths,
      config.match.dist.styles,
      config.match.dist.scripts,
      config.match.dist.images
    ]).on('change', plugins.livereload.changed);
  };
};
