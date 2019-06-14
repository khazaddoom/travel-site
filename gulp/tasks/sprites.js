var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
    mode : {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css' // Activate CSS output (with default options)
                }
            } 
        }
    }
};

gulp.task('cleanup', function() {

    return del(['./app/temp/sprite', './app/assets/images/sprites']);

});


gulp.task('createSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
            .pipe(svgSprite(config))
            .pipe(gulp.dest('./app/temp/sprite/'));
})

gulp.task('copySpriteGraphic', function() {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
                .pipe(gulp.dest('./app/assets/images/sprites'));
})

gulp.task('copySpriteCSS',  function() {
    return gulp.src('./app/temp/sprite/css/*.css')
            .pipe(rename('_sprite.css'))
            .pipe(gulp.dest('./app/assets/styles/modules'))
});

gulp.task('icons', gulp.series('cleanup', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS'));