var config = {};

config.paths = {};
config.paths.basedir = global.process.env.INIT_CWD;
config.paths.public = config.paths.basedir + '/public';
config.paths.node_modules = config.paths.basedir + '/node_modules';
config.paths.bower_components = config.paths.basedir + '/bower_components';
config.paths.tasks = config.paths.basedir + '/gulp-tasks';
config.paths.views = config.paths.public + '/views';

config.paths.src = {
  styles: config.paths.public + '/assets/src/styles',
  scripts: config.paths.public + '/assets/src/scripts',
  images: config.paths.public + '/assets/src/images'
};

config.paths.dist = {
  styles: config.paths.public + '/assets/dist/css',
  scripts: config.paths.public + '/assets/dist/js',
  images: config.paths.public + '/assets/dist/img'
};

config.files = {
  jshintrc: config.paths.basedir + '/.jshintrc',
  src: {
    styles: [
      config.paths.src.styles + '/app.sass'
    ],
    scripts: [
      config.paths.src.scripts + '/app.js'
    ]
  },
  dist: {
    styles: 'build.css',
    scripts: 'build.js'
  }
};

config.match = {
  views: config.paths.views + '/**/*',
  src: {
    styles: config.paths.src.styles + '/**/*',
    scripts: config.paths.src.scripts + '/**/*',
    images: config.paths.src.images + '/**/*'
  },
  dist: {
    styles: config.paths.dist.styles + '/**/*',
    scripts: config.paths.dist.scripts + '/**/*',
    images: config.paths.dist.images + '/**/*'
  }
};

config.plugins = {
  autoprefixer: {
    // List of browsers which are supported in your project
    browsers: [
      '> 1%',
      'last 2 versions',
      'Firefox ESR',
      'Explorer 9'
    ],
    cascade: true, // Use Visual Cascade if CSS is uncompressed
    add: true, // Add prefixes
    remove: true // Remove outdated prefixes
  },
  babel: {
    code: true, // Enable code generation
    compact: false, // Do not include superfluous whitespace characters and line terminators
    comments: true, // Output comments in generated output
    presets: ["es2015"] // List of presets to load and use
  },
  cssnano: {
    discardComments: {
      removeAll: true // Remove all comments marked as important
    },
    discardDuplicates: true, // Discard duplicate rules in your CSS
    discardEmpty: true, // Discard empty rules and values
    discardUnused: {
      fontFace: true, // Pass false to disable discarding unused font face rules
      counterStyle: true, // Pass false to disable discarding unused counter style rules
      keyframes: true, // Pass false to disable discarding unused keyframe rules.
      namespace: true // Pass false to disable discarding unused namespace rules.
    }
  },
  imagemin: {
    optimizationLevel: 5, // Optimization level between 0 and 7
    progressive: true, // Lossless conversion to progressive
    interlaced: true, // Interlace gif for progressive rendering
    multipass: true // Optimize svg multiple times until it's fully optimized
  },
  livereload: {
    port: 35729, // Server port
    host: '127.0.0.1', // Server host
    start: false, // Automatically start
    quiet: false // Disable console logging
  },
  plumber: {
    errorHandler: function (err) {
      var util = require('gulp-util');
      var message = util.colors.red(err);
      util.beep();
      util.log(message);
      this.emit('end');
    }
  },
  rename: {
    suffix: '.min'
  },
  sass: {
    includePaths: [
      config.paths.bower_components
    ], // An array of paths that libsass can look in to attempt to resolve your @import declarations
    indentedSyntax: true, // Enable Sass Indented Syntax for parsing the data string or file
    indentType: 'space', // Used to determine whether to use space or tab character for indentation
    indentWidth: 2, // Used to determine the number of spaces or tabs to be used for indentation
    outputStyle: 'nested', // Determines the output format of the final CSS style (nested, expanded, compact, compressed)
    precision: 5, // Used to determine how many digits after the decimal will be allowed
    sourceComments: false // Enables additional debugging information in the output file as CSS comments
  },
  uglify: {
    mangle: true // Pass false to skip mangling names
  },
  watch: {
    verbose: false, // Enable verbose output
    persistent: true, // Indicates whether the process should continue to run as long as files are being watched
    // Whether to use fs.watchFile (backed by polling), or fs.watch
    // It is typically necessary to set this to true to successfully watch files over a network
    usePolling: true
  }
};

module.exports = config;
