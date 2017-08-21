const gulp = require('gulp')
const gutil = require('gulp-util')
const requireDir = require('require-dir')
const runsequence = require('run-sequence')


// Split gulp tasks ------------------------------------
// Allows for multiple file gulp tasks.
// -----------------------------------------------------

requireDir('./gulp')


// Build  ----------------------------------------------
// 1. Clean public folder
// 2. Compiles CSS from SASS
// 3. Render handlebars templates
// 4. Minifies images with caching
// 5. ESLint our javascripts
// 6. Minify javascript
// 5. Validates HTML
// -----------------------------------------------------

gulp.task('build', () => {
  runsequence('clean', [
    'sass',
    //'handlebars',
    'images',
    'javascripts',
    'documents',
  ], 'html')
})


// Develop ---------------------------------------------
// Run server and watch for changes.
// -----------------------------------------------------

gulp.task('develop', [
  'serve',
  'watch'
])


// Watch -----------------------------------------------
// 1. Sass
// 2. Handlebars
// 3. Images
// 4. Javascripts
// -----------------------------------------------------

gulp.task('watch', () => {
  runsequence(
    'watch:sass',
    //'watch:handlebars',
    'watch:images',
    'watch:javascripts'
  )
})

gulp.task('watch:handlebars', () => {
  return gulp.watch('app/views/**/*.hbs', ['handlebars'])
})

gulp.task('watch:sass', () => {
  return gulp.watch('app/sass/**/*.scss', ['sass'])
})

gulp.task('watch:images', () => {
  return gulp.watch('app/images/**/*.+(png|jpg|jpeg|gif|svg)', ['images'])
})

gulp.task('watch:javascripts', () => {
  return gulp.watch('app/javascripts/**/*.js', ['javascripts'])
})


// Default ---------------------------------------------
// Output list of gulp tasks.
// -----------------------------------------------------

gulp.task('default', () => {

  const cyan = gutil.colors.cyan
  const green = gutil.colors.green

  gutil.log(green('----------'))

  gutil.log(('The following main ') + cyan('tasks') + (' are available:'))

  gutil.log(cyan('clean') + ': Removes public, reports, screenshots and log files')
  gutil.log(cyan('build') + ': Copy assets to public, validate html')
  gutil.log(cyan('develop') + ': Set up watch and serve')

  gutil.log(green('----------'))

})
