// karma.conf.js
module.exports = function(config) {
    config.set({
      basePath: './tests',
      frameworks: ['jasmine'],
      // frameworks: ['karma-jasmine'],
      browsers: ['Chrome'],
      singleRun: true,
      files: [
          '*.js'
      ]
      //...
    });
  };
