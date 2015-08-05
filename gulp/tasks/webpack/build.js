var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require('webpack-stream');
var gulpWebpack  = require('webpack-stream');
var webpackConfig = require("../../../webpack.config");
//var config = require("../../../config");

gulp.task("webpack:build", ['clean', 'test'], function(callback) {
	// modify some webpack config options
	//var myConfig = Object.create(webpackConfig);
	var myConfig = webpackConfig;
	//myConfig.output.publicPath = config.production.publicPath;
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
	);

	// run webpack
	return gulp.src(myDevConfig.entry.index)
		.pipe(gulpWebpack(myDevConfig))
		.pipe(gulp.dest(myDevConfig.output.path));
});