const Gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
/*
-- TOP LEVEL Functions --
  gulp.task - Define tasks
  gulp.src - Point tofiles to use
  gulp.dest - Points folder to output
  gulp.watch - watch files and folders for changes
*/

// Logs Message
Gulp.task('message', function(){
  return console.log("Gulp is running...")
});

// Optimize Images
Gulp.task('copyHtml', function(){
  Gulp.src('src/*.html')
    .pipe(Gulp.dest('dist'));
});

// Copy ALL HTML files
Gulp.task('imageMin', ()=>
  Gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(Gulp.dest('dist/images'));
);

Gulp.task('default', function(){
  return console.log("Gulp is running...")
});

//Minigy js
Gulp.task('minify', function(){
  Gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(Gulp.dest('dist/js'));
});

//Compile Sass
Gulp.task('sass', function(){
  Gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(Gulp.dest('dist/css'));
});

Gulp.task('scripts', function(){
  Gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(Gulp.dest('dist/js'));
});

Gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass','scripts']);
