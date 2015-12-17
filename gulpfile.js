var gulp = require('gulp'),
jade = require('gulp-jade'),
sass = require('gulp-sass'),
connect = require('gulp-connect');


var env = process.env.NODE_ENV || 'development';
var outputDir = './';

gulp.task('jade', function(){
	return gulp.src('src/templates/**/*.jade')
	.pipe(jade({ pretty: true }))
	.pipe(gulp.dest(outputDir))
	.pipe(connect.reload());
});

gulp.task('sass', function(){
	var config = {};
	if (env === 'development') {
		config.sourceComments = 'map';
	};
	if (env === 'production') {
		config.outputStyle = "compressed"
	};

	return gulp.src('src/sass/main.scss')
	.pipe(sass(config))
	.pipe(gulp.dest(outputDir + '/css'))
	.pipe(connect.reload());

});

gulp.task('watch', function(){
	gulp.watch('src/templates/**/*.jade', ['jade']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/sass/**/*.scss', ['sass']);

});

gulp.task('connect', function() {
    return connect.server({
        root: ['./'],
        port: 8888, // optional
        livereload: false
    });
});﻿



gulp.task('default', ['jade', 'sass', 'watch', 'connect']);

