var gulp = require('gulp');
var ren = require('gulp-rename');
var less = require('gulp-less');
var debug = require('gulp-debug');

var nm = 'node_modules';

var folders = {
    scripts: 'src/scripts',
    style: 'src/css'
};

gulp.task('default', ['createLess'], function() {
  // place code for your default task here
  
});

gulp.task('createLess', function () {
    var path = folders.style + '/*.less';
    return gulp.src(path)
        .pipe(debug())
        .pipe(less())
        .pipe(ren({ extname: '.css' }))
        .pipe(debug())
        .pipe(gulp.dest(folders.style + '/'));
});

gulp.task('copyScripts',['copyRequire','copyAngular','copyBootstrap','copyUnderscore','copyFa','copyMoment']);

gulp.task('copyRequire', function(){
    return gulp.src(nm + '/requirejs/bin/r.js')
        .pipe(ren('require.js'))
        .pipe(gulp.dest(folders.scripts + '/requirejs/'));
});

gulp.task('copyAngular', function(){
    return gulp.src([nm + '/angular/angular.js', nm + '/angular-route/angular-route.js'])
        .pipe(gulp.dest(folders.scripts + '/angular/'));
});

gulp.task('copyBootstrap', function(){
    return gulp.src(nm + '/bootstrap/dist/**/*.*')
        .pipe(gulp.dest(folders.style + '/bootstrap/'));
});

gulp.task('copyUnderscore', function () {
    return gulp.src(nm + '/underscore/underscore.js')
        .pipe(gulp.dest(folders.scripts + '/underscore/'));
});

gulp.task('copyMoment', function () {
    gulp.src(nm + '/moment/moment.js')
        .pipe(gulp.dest(folders.scripts + '/moment/'));

    gulp.src(nm + '/moment/locale/nb.js')
        .pipe(gulp.dest(folders.scripts + '/moment/locale/'));
});

gulp.task('copyFa', function () {
   gulp.src([nm + '/font-awesome/css/font-awesome.css'])
        .pipe(debug())
        .pipe(gulp.dest(folders.style + '/font-awesome/css'));

   gulp.src([nm + '/font-awesome/fonts/*.woff', nm + '/font-awesome/fonts/*.woff2'])
       .pipe(debug())
       .pipe(gulp.dest(folders.style + '/font-awesome/fonts'));
});