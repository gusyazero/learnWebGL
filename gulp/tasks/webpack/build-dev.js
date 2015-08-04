var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require('webpack-stream');
var webpackConfig = require("../../../webpack.config");

// modify some webpack config options
//var myDevConfig = Object.create(webpackConfig);
var myDevConfig = webpackConfig;
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

gulp.task("webpack:build-dev", ['clean', 'test'], function() {
	return gulp.src(myDevConfig.entry.index)
		.pipe(webpack(myDevConfig))
		.pipe(gulp.dest(myDevConfig.output.path));
});
