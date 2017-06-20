const gulp = require('gulp')


// Documents --------------------------------------
// Move documents folder into public.
// -----------------------------------------------------

gulp.task('documents', () => {
  return gulp.src('app/documents//**/*.*')
    .pipe(gulp.dest('public/documents'))
})
