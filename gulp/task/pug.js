module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.glp.pug({
                pretty: true
            }))
            .pipe($.glp.rename(function (path) {
                path.extname = ".php"
              }))
            .pipe($.gulp.dest('build'))
            .on('end', $.bs.reload);
    });

    // $.gulp.task('pug2', function () {
    //     return $.gulp.src('src/pug/**/*.pug')
    //         .pipe($.glp.pug({
    //             pretty: true
    //         }))
    // });
}