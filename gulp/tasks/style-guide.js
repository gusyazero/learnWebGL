var gulp = require('gulp');
var hologram = require('gulp-hologram');

gulp.task('style-guide', function () {
	gulp.src('hologram_config.yml')
		.pipe(hologram());
});
