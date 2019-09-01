module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/sass/**/*.sass')
            .pipe($.glp.sass().on('error', $.glp.sass.logError))
            .pipe($.gulp.dest('build/css'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}