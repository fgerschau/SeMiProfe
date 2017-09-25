const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', () => gulp.src('less/*.less')
  .pipe(less())
  .pipe(gulp.dest('public/css')));
gulp.watch('less/*.less', ['less']);
