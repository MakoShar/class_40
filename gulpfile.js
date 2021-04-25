var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })  
});

gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('script', function() {
    gulp.src([
        'intro.js',
        'setting.js',
        '*.js',
        'app.js',
        'outro.js'
    ])
        .pipe(connect.reload())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
    gulp.watch(['*.html'], ['html']);
    //gulp.watch(['app.js', '*.js'], ['script']);
});

gulp.task('default', ['', 'connect', 'watch']);
//script
