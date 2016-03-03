var gulp = require('gulp'),
    less = require('gulp-less');
 	// cssmin = require('gulp-minify-css');
gulp.task('testLess', function () {
    gulp.src('less/*.less')
        .pipe(less())
        // .pipe(cssmin())
        .pipe(gulp.dest('css'));
});


gulp.task('testWatch', function () {
    gulp.watch('less/*.less', ['testLess']);
});