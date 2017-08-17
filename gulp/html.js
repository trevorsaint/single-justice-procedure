const gulp = require('gulp')
const html = require('gulp-htmlhint')


// HTML validator --------------------------------------
// Validates all HTML pages.
// -----------------------------------------------------

gulp.task('html', () => {
  gulp.src('public/*.html')
    .pipe(html())
    .pipe(html.reporter())
})
