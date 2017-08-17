const gulp = require('gulp')


// Documents --------------------------------------
// Move all documents into public.
// -----------------------------------------------------

gulp.task('documents', () => {
  gulp.src('app/documents/**/*.*')
    .pipe(gulp.dest('public/documents'))
})
