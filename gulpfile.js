var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function() {
    console.log("this is from a gulp task");

});

gulp.task('html', function() {
    console.log('something chnaged in the HTML file(s)');

});

gulp.task('styles', function() {
    console.log('something chnaged in the CSS file(s)');

});

gulp.task('watch', function() {
    watch(['./app/index.html'], function() {
        gulp.task('html').call();
    });

    watch(['./app/assets/styles/**/*.css'], function() {
        gulp.task('styles').call();
    });
})