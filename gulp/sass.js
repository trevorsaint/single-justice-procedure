const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')


// Sass ------------------------------------------------
// Compiles css from sass, autoprefix and compress.
// -----------------------------------------------------

gulp.task('sass', () => {
  return gulp.src('app/sass/*.scss')
    .pipe(sass({
      includePaths: [
        'node_modules/govuk_frontend_toolkit/stylesheets',
        'node_modules/govuk-elements-sass/public/sass'
      ],
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('public/stylesheets'))
})
