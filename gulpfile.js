const gulp = require('gulp'),
    del = require('del'),
    ts = require('gulp-typescript'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver'),
    webroot = "www",
    paths = {
        www: "./" + webroot + "/",
        jsOutput: "./" + webroot + "/app/",
        jsSource: './src/**/*.js',
        tsSource: './src/**/*.ts'
    };

gulp.task('clean', function () {
    del([
        paths.www + 'app/**/*.js'
    ]);
});

gulp.task('compile', [ 'clean' ] ,function () {
     var tsResult = ts.createProject('tsconfig.json')
                     .src(paths.tsSource)
                       .pipe(sourcemaps.init())
					   .pipe(ts({
						   sortOutput: true,
                           target: 'ES5'
					   }));
	
	return tsResult.js
				.pipe(concat('app.js')) 
				.pipe(sourcemaps.write('maps')) 
				.pipe(gulp.dest(paths.jsOutput));
});

gulp.task('run', function(){
    gulp.src('www')
        .pipe(webserver({
            livereload: false,
            port: 9000,
            open: true
        }));
});

gulp.task('build', [ 'compile', 'run'], function () {
    return gulp.watch(paths.tsSource, ['compile']);
});