var gulp = require('gulp');
var ren = require('gulp-rename');
var nm = 'node_modules';
var scripts = 'src/scripts';

gulp.task('default', ['copyScripts'], function() {
  // place code for your default task here
  
});

gulp.task('copyScripts',['copyRequire']);

gulp.task('copyRequire', function(){
    return gulp.src(nm + '/requirejs/bin/r.js')
        .pipe(ren('require.js'))
        .pipe(gulp.dest(scripts + '/requirejs/'));
});