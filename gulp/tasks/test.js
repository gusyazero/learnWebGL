var gulp = require('gulp');
var karma = require('karma');
//var karmaConfig = require('../../karma.conf.js');

gulp.task('test', ['tslint'], function (done) {
/*
	var server = new karma.Server({
		configFile: __dirname + '/../../karma.conf.js',
		singleRun: true
	});
	//var server = new karma.Server(karmaConfig);
	return server.start();
*/
	return karma.server.start({
		configFile: __dirname + '/../../karma.conf.js',
		singleRun: true
	}, done);
});
