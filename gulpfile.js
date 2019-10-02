"use strict";

global.$ = {
  gulp: require("gulp"),
  glp: require("gulp-load-plugins")(),
  bs: require("browser-sync").create(),
  sass_compiler: require("node-sass"),
  //connectPHP: require("gulp-connect-php"),

  path: {
    task: require("./gulp/config/task.js")
  }
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task(
  "default",
  $.gulp.series(
    $.gulp.parallel("pug", "sass", "scripts:lib", "scripts", "php"),
    $.gulp.parallel("watch", "serve"),
  )
);

// var gulp = require('gulp'), // Подключаем Gulp
//     sass = require('gulp-sass'), //Подключаем Sass пакет,
//     browserSync = require('browser-sync').create(); // Подключаем Browser Sync
// concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
//     uglify = require('gulp-uglify'), // Подключаем gulp-uglifyjs (для сжатия JS)
//     cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
//     rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
//     del = require('del'), // Подключаем библиотеку для удаления файлов и папок
//     imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
//     pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
//     cache = require('gulp-cache'), // Подключаем библиотеку кеширования
//     autoprefixer = require('gulp-autoprefixer'); // Подключаем библиотеку для автоматического добавления префиксов
// //connectphp   = require('gulp-connect-php');

// gulp.task('sass', function() { // Создаем таск Sass
//     return gulp.src('app/sass/**/*.sass') // Берем источник
//         .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
//         .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
//         .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
//         .pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменении
// });

// gulp.task('browser-sync', function() { // Создаем таск browser-sync
//     browserSync.init({ // Выполняем browserSync
//         proxy: "app/",
//         port: 3010,
//         //tunnel: true,
//         // host: 'localhost',
//         // port: 9000,
//         // server: { // Определяем параметры сервера
//         //     baseDir: "./app" // Директория для сервера - app
//         // },
//         // proxy: {
//         //     target: "localhost:8080", // can be [virtual host, sub-directory, localhost with port]
//         //     ws: true // enables websockets
//         // },
//         notify: false // Отключаем уведомления
//     });
// });

// gulp.task('scripts', function() {
//     return gulp.src([ // Берем все необходимые библиотеки
//             'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
//             'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
//         ])
//         .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
//         .pipe(uglify()) // Сжимаем JS файл
//         .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
// });

// gulp.task('css-libs', gulp.parallel('sass'), function() {
//     return gulp.src('app/css/libs.css') // Выбираем файл для минификации
//         .pipe(cssnano()) // Сжимаем
//         .pipe(rename({ suffix: '.min' })) // Добавляем суффикс .min
//         .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
// });

// gulp.task('watch', function() {
//     gulp.watch('app/sass/**/*.sass', gulp.series('sass')); // Наблюдение за sass файлами в папке sass
//     gulp.watch('app/**/*.html').on('change', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
//     gulp.watch('app/js/**/*.js').on('change', browserSync.reload); // Наблюдение за JS файлами в папке js
//     gulp.watch('app/**/*.php').on('change', browserSync.reload); // Наблюдение за JS файлами в папке js
// });

// gulp.task('clean', function() {
//     return del.sync('dist'); // Удаляем папку dist перед сборкой
// });

// gulp.task('img', function() {
//     return gulp.src('app/img/**/*') // Берем все изображения из app
//         .pipe(cache(imagemin({ // Сжимаем их с наилучшими настройками с учетом кеширования
//             interlaced: true,
//             progressive: true,
//             svgoPlugins: [{ removeViewBox: false }],
//             use: [pngquant()]
//         })))
//         .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
// });

// gulp.task('build', gulp.parallel('clean', 'img', 'sass', 'scripts'), function() {

//     var buildCss = gulp.src([ // Переносим библиотеки в продакшен
//             'app/css/main.css',
//             'app/css/libs.min.css'
//         ])
//         .pipe(gulp.dest('dist/css'))

//     var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
//         .pipe(gulp.dest('dist/fonts'))

//     var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
//         .pipe(gulp.dest('dist/js'))

//     var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
//         .pipe(gulp.dest('dist'));

// });

// gulp.task('clear', function() {
//     return cache.clearAll();
// })

// gulp.task('default', gulp.parallel('watch', 'browser-sync', 'css-libs', 'scripts'));
