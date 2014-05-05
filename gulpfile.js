
//======================================================
// OVERVIEW
//======================================================

// gulp watches for changes in 'app', processes and pushes to 'dist'
// a jekyll server watches 'dist' and pushes to 'site'
// jekyll runs over localhost:4000 by default
 
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
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
var exec = require('gulp-exec');

// paths
var app = './_app';
var dist = '.';
var site = './_site';
var js = '/js';
var css = '/css';
var img = '/img';
var layouts = '/_layouts';
var prefix = require('gulp-autoprefixer');

//======================================================
// PROCESS
//======================================================

// lint js
gulp.task('lint', function() {
    gulp.src(app + js + '/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// compile sass and autoprefix
gulp.task('css', function() {
    gulp.src(app + css + '/*.scss')
        .pipe(sass())
        .pipe(prefix(["last 1 version", "> 1%", "ie 8", "ie 7"], { cascade: true }))
        .pipe(gulp.dest(dist + css));
});

// concat and move js
gulp.task('scripts', function() {
    gulp.src(app + js + '/main.js')
        // .pipe(browserify())
        // .pipe(uglify())
        .pipe(gulp.dest(dist + js));
    gulp.src(app + js + '/vendor/*.js')
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist + js));
});

// minify images
gulp.task('images', function () {
    return gulp.src(app + img + '/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest(dist + img));
});

// move other files
gulp.task('move', function () {
    gulp.src(app + '/*.{txt,html,ico}')
        .pipe(gulp.dest(dist));
    gulp.src(app + layouts + '/*.html')
        .pipe(gulp.dest(dist + layouts));
    gulp.src(app + css + '/fonts/*')
        .pipe(gulp.dest(dist + css + '/fonts'));
});

//======================================================
// SERVE
//======================================================

// run jekyll with watch
gulp.task('jekyll', function () {
    gulp.src('.')
        .pipe(exec('jekyll serve -w'));
});

// clean
gulp.task('clean', function () {
    return gulp.src([
            site, 
            dist + js, 
            dist + css,
            dist + img,
            dist + layouts
        ], {read: false})
        .pipe(clean({force: true}))
        .pipe(gulp.dest(''));
});

// watch
gulp.task('watch', function() {
    gulp.watch(app + js + '/*.js', ['lint', 'scripts']);
    gulp.watch(app + css + '/*.scss', ['css']);
    gulp.watch(app + img + '/*.jpg', ['images']);
    gulp.watch([app + '/*.{txt,html,ico}', app + layouts + '/*.html'], ['move']);
});

// build
gulp.task('build', ['clean'], function() {
    return gulp.start('lint', 'css', 'scripts','images','move');
});

// serve
gulp.task('serve', ['build'], function() {
    gulp.start('jekyll', 'watch');
});

// default
gulp.task('default', [ 'clean', 'build', 'serve' ], function(){});