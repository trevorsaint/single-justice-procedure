const gulp = require('gulp')
const browserSync = require('browser-sync')
const nodemon = require('gulp-nodemon')


// Serve ----------------------------------------------
// Run server using nodemon and browserSync and watch.
// -----------------------------------------------------

gulp.task('serve', [
  'nodemon',
  'browser-sync'
])


// browserSync -----------------------------------------
// Configure browserSync.
// -----------------------------------------------------

gulp.task('browser-sync', () => {

  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    files: ["public/**/*.*"],
    browser: 'firefox',
    notify: false,
    port: 3001
  })

})


// Nodemon ---------------------------------------------
// Configure Nodemon.
// -----------------------------------------------------

gulp.task('nodemon', () => {

  let started = false

  return nodemon({
    script: 'server.js',
    ignore: [
      'public/*',
      'test/*',
      'gulp-tasks/*',
      'node_modules/*'
    ]
  }).on('start', () => {
    if (!started) {
      started = true;
    }
  })

})
