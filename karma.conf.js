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
        ],
        customLaunchers: {
            // tell TravisCI to use chromium when testing
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
    });
    //...
    // Detect if this is TravisCI running the tests and tell it to use chromium
    if(process.env.TRAVIS){
       config.browsers = ['Chrome_travis_ci'];
    } 
};
