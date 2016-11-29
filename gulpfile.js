
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Compile sass files
gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'));
});

// Task for building blog when something changed:
gulp.task('build', shell.task(['jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({
      server: {
        baseDir: '_site/'}
      });

    // Reloads page when some of the already built files changed:
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);
