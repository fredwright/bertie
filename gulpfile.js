
//======================================================
// OVERVIEW
//======================================================

// gulp compiles sass, runs autoprefixer, concats js, watches 
// for changes and serves with livereload... simple
 
// DISCLAIMER

// clearly, this process does not concatenate/minify css or js
// this is meant for display purposes only 
// and would not be the case on a production site

//======================================================
// SETUP
//======================================================

// gulp
var gulp = require('gulp'); 

// plugins
var sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

// paths
var app = './app',
    dist = './dist',
    css = '/css',
    js = '/js',
    img = '/img';

//======================================================
// PROCESS
//======================================================

// compile scss and autoprefix
gulp.task('css', function() {
    return gulp.src(app + css + '/*.scss')
        .pipe(sass())
        .pipe(prefix(["last 2 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
        .pipe(gulp.dest(dist + css))
        .pipe(connect.reload());
});

// concat js
gulp.task('js', function() {
    return gulp.src(app + js + '/*.js')
        .pipe(gulp.dest(dist + js))
        .pipe(connect.reload());
});
gulp.task('vendorjs', function() {
    return gulp.src(app + js + '/vendor/*.js')
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist + js))
        .pipe(connect.reload());
});

// minify images
gulp.task('images', function () {
    return gulp.src(app + img + '/*.jpg')
        // .pipe(imagemin())
        .pipe(gulp.dest(dist + img))
        .pipe(connect.reload());
});

// move other files
gulp.task('move', function () {
    return gulp.src(app + '/*')
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});
gulp.task('fonts', function () {
    return gulp.src(app + css + '/fonts/*')
        .pipe(gulp.dest(dist + css + '/'))
        .pipe(connect.reload());
});

//======================================================
// BUILD
//======================================================

// build
gulp.task('build', [ 'css', 'js', 'vendorjs', 'images', 'move', 'fonts' ]);

//======================================================
// SERVE
//======================================================

// watch
gulp.task('watch', function() {
    gulp.watch(app + css + '/*.scss', ['css']);
    gulp.watch(app + js + '/*.js', ['js']);
    gulp.watch(app + img + '/*.jpg', ['images']);
    gulp.watch(app + '/*', ['move']);
});

// serve
gulp.task('connect', function() {
  connect.server({
    root: dist,
    port: 9000,
    livereload: true
  });
});

// build, serve and watch for changes
gulp.task('default', [ 'build', 'watch', 'connect' ]);