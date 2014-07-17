var gulp = require('gulp');

gulp.task('default', function() {
    console.log('hello world');
});

gulp.task('copy', function() {
    gulp.src('./posts/*')
        .pipe(gulp.dest('./public/posts/'));
});

