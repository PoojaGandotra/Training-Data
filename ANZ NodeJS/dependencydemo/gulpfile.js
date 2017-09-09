var gulp =require('gulp');

var paths ={
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.css',
    srcJS: 'src/**/*.js',
    tmp: 'tmp',
    tmpInject: 'tmp/injectdemo.html',
    tmpCSS: 'tmp/**/*.css',
    tmpJS: 'tmp/**/*.js',
    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js'
}

var webserver = require('gulp-webserver');
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('default', function() {
    console.log('Gulp is ready!!')
});
gulp.task('html', function () {

    return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));

});
gulp.task('css', function () {

    return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));

});

gulp.task('js', function () {

    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));

});


gulp.task('copy', ['html', 'css', 'js']);
gulp.task('serve', ['copy'], function () {
    return gulp.src(paths.tmp)
        .pipe(webserver({
            port: 7000,
            livereload: true
        }));

});

gulp.task ('watch',['serve'], function (){
     gulp.watch(paths.src, ['copy'])
    }

)