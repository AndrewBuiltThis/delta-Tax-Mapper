/*
	In order to use this file to compile the scss (should you choose to make
	it more complex, you'll need to ensure you have node.JS installed on your
	machine. If that makes no sense, google 'download node JS' :)
	
	Once that's installed, then go to this folder directory in command line and run
	the following commands:
		npm init -y
		npm install gulp
		npm install gulp-sass
	
	That will create a folder called 'node_modules' as well as a package.json file
	More correctly though, we create a node.js project and installed two modules, gulp
	and gulp-sass.
*/

const gulp =  require('gulp');
const sass = require('gulp-sass');

// Compile the scss files into css
gulp.task('sass', function() {
    gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

// Compile and watch
gulp.task('sass:watch', function() {
    gulp.watch('./src/*.scss', ['sass']);
});