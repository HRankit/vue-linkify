// Karma configuration
module.exports = function(config) {
    config.set({
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',
      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['mocha'],
      // frameworks: ['jasmine'],
      // frameworks: ['mocha','jasmine'],
      // list of files / patterns to load in the browser
      files: ['*Test.js'],
      // list of files to exclude
      exclude: [],
      // preprocess matching files before serving them to the browser
      preprocessors: {
          '*Test.js': [ 'webpack'] //preprocess with webpack
      },
      // test results reporter to use
      reporters: ['progress'],
      // setting up webpack configuration
      webpack: require('./webpack.test.config'),
      // web server port
      port: 9876,
      // enable / disable colors in the output (reporters and logs)
      colors: true,
      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,
      // start these browsers
      browsers: ['Chrome'],
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: true,
      // Concurrency level how many browser should be started simultaneous
      concurrency: Infinity
    })
  }