// Karma configuration
// Generated on Tue Jun 30 2015 18:11:49 GMT+0900 (東京 (標準時))
var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			// { pattern: 'test/**/*[sS]pec.ts', watched: false }
			{ pattern: 'spec.bundle.js', watched: false }
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			//'./spec/**/*[sS]pec.ts':  ['webpack', 'sourcemap']
			'spec.bundle.js': ['webpack', 'sourcemap']
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		//reporters: ['progress'],
		//reporters: ['progress', 'spec', 'html'],
		reporters: ['spec'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		//logLevel: config.LOG_DEBUG,


		// enable / disable watching file and executing tests whenever any file changes
		//autoWatch: true,
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		//browsers: ['Chrome', 'PhantomJS'],
		//browsers: ['PhantomJS'],
		browsers: ['Chrome'],		// PhantomJS is not support WebGL

		webpack: {
			cache: true,
			resolve: {
				root:[path.join(__dirname, 'bower_components')],
				extensions:['', '.webpack.js', 'web.js', '.js', '.ts']
			},
			plugins: [
				new webpack.ResolverPlugin(
					new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
				)
			],
			module: {
				loaders: [
					{ test: /\.ts$/, loader: 'awesome-typescript-loader?emitRequireType=false' }
				]
			}
		},
		webpackMiddleware: {
			noInfo: true,
			stats: {
				color: true,
				chunkModules: false,
				modules: false
			}
		},

		plugins: [
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-sourcemap-loader',
			'karma-webpack',
			//'karma-jasmine-html-reporter',
			'karma-spec-reporter'
		],
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		//singleRun: false
		singleRun: true
	})
}
