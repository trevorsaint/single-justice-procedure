const gulp = require('gulp')
const handlebars = require('gulp-handlebars-extended')
const changed = require('gulp-changed')


// Handlebars --------------------------------------------
// Render handlebars templates into html files.
// -----------------------------------------------------

gulp.task('handlebars', () => {
  return gulp.src('app/views/*.hbs')
    .pipe(handlebars({
      path: [
        'app/views',
        'app/views/layout',
        'app/views/partials'
      ]
    }))
    .pipe(changed('public'))
    .pipe(gulp.dest('public'))
})
