var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    watch(['./app/index.html'], function() {
        
        browserSync.reload();

    }).on('change', function(path, stats) {
        console.log(path.replace(/^.*(\\|\/|\:)/, '') + " changing..");
    });

    watcher = watch(['./app/assets/styles/**/*.css'], function() {
        gulp.task('styles').call();
        gulp.task('cssInject').call();
    }).on('change', function(path, stats) {
        console.log(path.replace(/^.*(\\|\/|\:)/, '') + " changing..");
    });
});

gulp.task('cssInject', function() {
    //console.log('inject');
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});