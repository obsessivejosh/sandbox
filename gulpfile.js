var gulp = require('gulp');
var sass = require('gulp-sass');
var refresh = require('gulp-livereload');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var strip = require('gulp-strip-comments');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('scripts', function() {
  gulp.src([
      'src/js/lib/jquery.min.js',
      'src/js/main.js'
    ])
    .pipe(strip())
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('styles', function () {
  gulp.src('src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(refresh());
});

// gulp.task('maps', function(){
//   gulp.src('src/sass/main.scss')
//     .pipe(sourcemaps.init())
//       .pipe(sass())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest(theme_dir+'/assets/css'));
// })

var tasklist = ['styles','scripts'];

gulp.task('default', tasklist , function() {
    refresh.listen();
    return gulp.watch('src/**/*.*', tasklist )
});
