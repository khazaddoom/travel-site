var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
    browserSync.init({
        server: {
            baseDir: "docs"
        }
    });
})

gulp.task('deleteDistFolder', function() {
    return del('./docs');
})

//optimize images
gulp.task('optimizeImages', function() {
    return gulp.src([
        './app/assets/images/**/*', 
        '!./app/assets/images/icons',
        '!./app/assets/images/icons/**/*'
    ])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('usemin', function() {
    return gulp.src('./app/index.html')
                .pipe(usemin({
                    css: [function() { return rev() }, function() { return cssnano() }],
                    js: [function() { return rev() }, function() { return uglify() }]
                }))
                .pipe(gulp.dest('./docs'));
});

gulp.task('build', gulp.series('deleteDistFolder', 'icons', 'optimizeImages', 'styles', 'scripts', 'usemin'));