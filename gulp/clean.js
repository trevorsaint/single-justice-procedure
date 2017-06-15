const gulp = require('gulp')
const clean = require('del')


// Clean -----------------------------------------------
// Deletes public folder.
// -----------------------------------------------------

gulp.task('clean', () => {
  return clean([
    'public'
  ])
})
