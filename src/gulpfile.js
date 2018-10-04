var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync')

gulp.task('sass', function(){
	return gulp.src('app/main/sass/style.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/main/main/'))
})
gulp.task('watch', function(){
	gulp.watch('app/main/sass/style.sass', ['sass']);
})




// gulp.task('browser-sync', function(){
// 	browserSync({
// 		server:{
// 			baseDir: 'app'
// 		},
// 	});
// });