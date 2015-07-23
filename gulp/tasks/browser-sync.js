var appConfig = require('../app_config');

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
	browserSync.init({
		ui: {
			port: 3001,
			weinre: {
				port: 9090
			}
		},
		port: "8080",
		server: {
			baseDir: './www',
			index: 'index.html'
		}
	});
});
