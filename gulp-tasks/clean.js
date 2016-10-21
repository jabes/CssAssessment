module.exports = function (gulp, plugins, config, done) {
  return function (done) {
    return require('del')([
      config.paths.dist.styles,
      config.paths.dist.scripts,
      config.paths.dist.images
    ], {
      force: true
    }, done);
  }(done);
};
