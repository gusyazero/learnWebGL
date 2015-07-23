var appConfig = require('../app_config');

var gulp = require('gulp');
var tslint = require('gulp-tslint');

gulp.task('tslint', function(){
	return gulp.src([
		appConfig.resources.src.ts + '/**/*.ts',
		'!' + appConfig.resources.src.ts + '/typings/**/*.ts',
		'!' + appConfig.resources.src.ts + '/app_typings/**/*.ts'
	])
		.pipe(tslint())
		.pipe(tslint.report('verbose', {
			emitError: false
		}));
});
