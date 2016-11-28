
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Compile sass files
gulp.task('sass', function() {
  return sass('sass/*.scss')
    .pipe(gulp.dest('css'))
    .pipe(reload({ stream:true }));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', function() {
  // place code for your default task here
});
