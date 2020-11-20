const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');

gulp.task('pug', function () {
  return gulp.src('./source/pages/**/!(_)*.pug')
    .pipe($.pug({
      pretty: true,
    }))
    .pipe(gulp.dest('./public'))
});

gulp.task('sass', function () {
  var plugins = [
    autoprefixer()
  ]

  return gulp.src('./source/scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss(plugins))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('default',
  gulp.series(
    gulp.parallel('pug', 'sass'),
    function (done) {
      gulp.watch('./source/pages/**/*.pug', gulp.series('pug'))
      gulp.watch('./source/scss/**/*.scss', gulp.series('sass'))
      done()
    }
));
