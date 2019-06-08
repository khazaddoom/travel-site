var gulp = require('gulp');

gulp.task('default', function(cb) {
    console.log("this is from a gulp task");
    cb();
});

gulp.task('html', function(cb) {
    console.log('html stuff here');
    cb();
});