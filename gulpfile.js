var gulp = require('gulp');
var concat = require('gulp-concat');
var zip = require('gulp-zip');

gulp.task('default', ['concat-copy', 'zip-dist']);

gulp.task('concat-copy', function() {
    return gulp.src([
        './vendor/jquery-1.11.1.min.js',
        './src/scripts/jquery-no-conflict.js',
        './src/scripts/script1.js',
        './src/scripts/script2.js'
    ])
            .pipe(concat('skin.js'))
            .pipe(gulp.dest('./dist/skins/phantom/')),
            gulp.src([
                './src/skin.css'
            ])
            .pipe(concat('skin.css'))
            .pipe(gulp.dest('./dist/skins/phantom/')),
            gulp.src('./src/img/**/*')
            .pipe(gulp.dest('./dist/skins/phantom/img')),
            gulp.src('./src/sounds/*')
            .pipe(gulp.dest('./dist/skins/phantom/sounds'));
});

gulp.task('zip-dist', ['concat-copy'], function() {
    return gulp.src('./dist/**/*')
            .pipe(zip('phantom.zip'))
            .pipe(gulp.dest('C:/Users/Jason/AppData/Roaming/XLink Kai'));
});
