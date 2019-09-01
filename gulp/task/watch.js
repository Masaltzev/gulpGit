module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/sass/**/*.sass', $.gulp.series('sass'));
        $.gulp.watch('src/pug/pages/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/js/main.js', $.gulp.series('scripts'));
        $.gulp.watch('src/php/**/*.php', $.gulp.series('php'));
    });
}