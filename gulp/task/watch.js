module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/sass/**/*.sass', $.gulp.series('sass'));
        $.gulp.watch('src/pug/**/**/*.pug', $.gulp.series('pug'));
        //$.gulp.watch('src/pug/layout/**/*.pug', $.gulp.series('pug2'));
        $.gulp.watch('src/js/**/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/php/**/*.php', $.gulp.series('php'));
    });
}