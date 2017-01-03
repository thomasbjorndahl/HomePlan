var gulp = require('gulp');
var ren = require('gulp-rename');
var nm = 'node_modules';

var folders = {
    scripts: 'src/scripts',
    style: 'src/css'
};

gulp.task('default', ['copyScripts'], function() {
  // place code for your default task here
  
});

gulp.task('copyScripts',['copyRequire','copyAngular','copyBootstrap']);

gulp.task('copyRequire', function(){
    return gulp.src(nm + '/requirejs/bin/r.js')
        .pipe(ren('require.js'))
        .pipe(gulp.dest(folders.scripts + '/requirejs/'));
});

gulp.task('copyAngular', function(){
    return gulp.src(nm + '/angular/angular.js')
        .pipe(gulp.dest(folders.scripts + '/angular/'));
});

gulp.task('copyBootstrap', function(){
    return gulp.src(nm + '/bootstrap/dist/**/*.*')
        .pipe(gulp.dest(folders.style + '/bootstrap/'));
});