// Adiciona os módulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Função para compilar o Sass e adicionar os prefixos
function compilaSass() {
  return gulp
      .src('css/scss/style.scss')
      .pipe(sass({
        outputStyle: 'compressed'
      }))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(gulp.dest('css/'))
      .pipe(browserSync.stream())
}

// Tarefa de gulp para a função de sass
exports.compilaSass = compilaSass;

// Função para juntar os javascript's
function gulpJS() {
  return gulp
      .src('js/main/**/*.js')
      .pipe(concat('script-min.js'))
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('js/'))
      .pipe(browserSync.stream())
}

exports.gulpJS = gulpJS;

// Função para adição de plugins externos
function pluginJS() {
  return gulp
      .src([
        './js/external/pageclip.js',
      ])
      .pipe(concat('plugins.js'))
      .pipe(gulp.dest('js/'))
      .pipe(browserSync.stream())
}

exports.pluginJS = pluginJS;

// Função para iniciar o browser
function browser() {
  browserSync.init({
    server: {
      baseDir: "./",
    }
  });
}

// Tarefa para iniciar o browser-sync
exports.browser = browser;

// Função de watch do gulp
function watch() {
  gulp.watch('css/scss/**/*.scss', compilaSass);
  gulp.watch('js/main/**/*.js', gulpJS);
  gulp.watch(['*.html', '*.php']).on('change', browserSync.reload);

}

// Tarefa do watch
exports.watch = watch;

// Tarefa padrão do gulp
exports.default = gulp.parallel(watch, browser, compilaSass, gulpJS, pluginJS)
