// Various helper modules
var gulp = require("gulp");
var plug = require("gulp-load-plugins")();
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

var source = [
    'app/**/*.js',
    "!app/vendor/**/*.*"
];


gulp.task('compressjs', function () {
    return gulp.src(source)
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(gulp.dest('../public/javascripts'))
});

//sass to css
gulp.task('sass', function () {
    return gulp.src([
        'app/stylesheets/meyerweb.css-reset.scss',
        'app/stylesheets/main-layout.scss',
        'app/fonts/*.scss',
        'app/**/*.scss',
        '!app/vendor/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(concatCss("app.css"))
        .pipe(gulp.dest('app/stylesheets'));
});

gulp.task('compresscss', ["sass"], function () {
    gulp.src(["app/**/*.css", "!app/vendor/**/*.css"])
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('../public'))
});

gulp.task('minifyHtml', function () {
    return gulp.src(['app/javascripts/**/*.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('../public/javascripts'))
});

gulp.task('webserver', function () {
    return gulp
        .src('app')										// root
        .pipe(plug.webserver({
            livereload: true,							// livereload
            directoryListing: true,
            open: "http://localhost:8000/index.html"	// index.html
        }));
});


gulp.task("watch", function () {
    return gulp
        .watch([
            'app/**/*.js',
            "!app/vendor/**/*.*",
            "app/javascripts/**/*.js",
            "app/javascripts/**/*.html",
            "app/**/*.scss"
        ], ["servercompile"])
        .on("change", function (event) {
            console.log("*** File " + event.path + " was " + event.type + ", running tasks...");
        });
});

// The default task is 'webserver'
gulp.task("default", ["webserver", "watch"]);
gulp.task("servercompile", ["minifyHtml", "compresscss", "compressjs"]);


/*  
 if you don't use the default name if gulpfile.js,
 run gulp like this:
 gulp --gulpfile youFileName taskname
 */