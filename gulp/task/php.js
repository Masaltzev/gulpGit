module.exports = function () {
    $.gulp.task('php', function () {
        return $.gulp.src('src/php/**/*.php')
            .pipe($.gulp.dest('build/php'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}