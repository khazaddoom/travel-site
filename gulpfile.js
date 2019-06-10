
var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();


// function style() {
    
//     return gulp.src('./app/assets/styles/**/*')
//                 .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
//                 .pipe(gulp.dest('./app/temp/styles'))
// }

// exports.style = style;


/******** Pre Gulp 4 ***************/
var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function() {
    console.log("this is from a gulp task");
});

gulp.task('html', function() {
    console.log('something chnaged in the HTML file(s)');
});

gulp.task('styles', function() {

    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles')        
    );
    
});

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
    console.log('inject');
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});