module.exports = function() {
  $.gulp.task("serve", function() {
    $.bs.init({
      proxy: "build/",
      //port: 3000,
      notify: false
      //port: 3000,
      // startPath: "/php"
      // server: {
      //     baseDir: "./build"
      // },
      //startPath: "*.php"
    });
  });
  // $.gulp.task("con", function() {
  //   $.connectPHP.server({
  //     base: "./build",
  //     keepalive: true,
  //     hostname: "localhost",
  //     port: 8080,
  //     open: false
  //   });
  // });
}
