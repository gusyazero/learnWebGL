var appConfig = require('../app_config');

var gulp = require("gulp");

gulp.task('watch', ['styles', 'style-guide', 'webpack:build-dev', 'browser-sync'], function() {
	//gulp.watch('src/javascript/**/*.jade', ['jade']);
	gulp.watch(appConfig.resources.src.js + '/**/*.ts', ['webpack:build-dev', 'browser-reload']);
	gulp.watch(appConfig.resources.libs.js + '/**/*.js', ['webpack:build-dev', 'browser-reload']);
	gulp.watch(appConfig.resources.libs.css + '/**/*.css', ['styles', 'style-guide', 'browser-reload']);
	gulp.watch(appConfig.resources.src.css + '/**/*.scss', ['styles', 'style-guide', 'browser-reload']);
});
