module.exports = function (gulp, plugins, config, done) {
  return function (done) {
    return plugins.cache.clearAll(done);
  }(done);
};
