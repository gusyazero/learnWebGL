var appConfig = require('../app_config');

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var compass = require('gulp-compass');
var pleeease = require('gulp-pleeease');

gulp.task('styles', function () {
	gulp.src(appConfig.resources.src.css + '/**/*.scss')
		.pipe(plumber())
		.pipe(compass({
			config_file: 'config.rb',
			css: appConfig.resources.dst.css,
			sass: appConfig.resources.src.css
		}))
		.pipe(pleeease({
			autoprefixer: ['last 4 versions'],
			minifier: false
		}))
		.pipe(gulp.dest(appConfig.resources.dst.css))
});
