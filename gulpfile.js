var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');


gulp.task('default', function() {
    console.log("this is from a gulp task");
});

gulp.task('html', function() {
    console.log('something chnaged in the HTML file(s)');

});

gulp.task('styles', function() {

    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles')
    );
    
});

gulp.task('watch', function() {

   watch(['./app/index.html'], function() {
        gulp.task('html').call();
    }).on('change', function(path, stats) {
        console.log("File(s) at " + path + " changing..");
    });

    watcher = watch(['./app/assets/styles/**/*.css'], function() {
        gulp.task('styles').call();
    }).on('change', function(path, stats) {
        console.log("File(s) at " + path + " changing..");
    });
})

