var appConfig = require('../app_config');

var gulp = require('gulp');
var del = require('del');

// @see http://qiita.com/shinnn/items/bd7ad79526eff37cebd0
gulp.task('clean', function(cb) {
	del([appConfig.resources.dst.css, appConfig.resources.dst.js], cb);
});
