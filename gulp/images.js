const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')


// Images ----------------------------------------------
// Minifies png, jpeg, gif, png and svg images.
// -----------------------------------------------------

gulp.task('images', () => {
  return gulp.src('app/images/' + '**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('public/images'))
})
