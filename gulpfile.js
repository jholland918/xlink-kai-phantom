var gulp = require('gulp');
var concat = require('gulp-concat');
var zip = require('gulp-zip');

gulp.task('default', ['concat-copy', 'zip-dist']);

gulp.task('concat-copy', function() {
    return gulp.src([
        //'./src/scripts/fixdc_trial.js',
        './bower_components/jquery/dist/jquery.min.js',
        './vendor/jquery-ui-1.11.1.custom/jquery-ui.min.js',
        './bower_components/lodash/dist/lodash.min.js',
        './bower_components/notify.js/notify.js',
        './src/scripts/bootstrap.js',
        './src/scripts/config.js',
        './src/scripts/triggerBinder.js',
        './src/scripts/titleUpdater.js',
        './src/scripts/skinSettings.js',
        './src/scripts/soundPlayer.js',
        './src/scripts/soundRegulator.js',
        './src/scripts/views.js',
        './src/scripts/webNotify.js',
        './src/scripts/skinInit.js'
    ])
            .pipe(concat('skin.js'))
            .pipe(gulp.dest('./dist/skins/phantom/')),
            gulp.src([
                './vendor/jquery-ui-1.11.1.custom/jquery-ui.min.css',
                './vendor/jquery-ui-1.11.1.custom/jquery-ui.theme.min.css',
                './src/skin.css'
            ])
            .pipe(concat('skin.css'))
            .pipe(gulp.dest('./dist/skins/phantom/')),
            gulp.src('./src/img/**/*')
            .pipe(gulp.dest('./dist/skins/phantom/img')),
            gulp.src('./vendor/jquery-ui-1.11.1.custom/images/**/*')
            .pipe(gulp.dest('./dist/skins/phantom/images')),
            gulp.src('./src/sounds/*')
            .pipe(gulp.dest('./dist/skins/phantom/sounds'));
});

gulp.task('zip-dist', ['concat-copy'], function() {
    return gulp.src('./dist/**/*')
            .pipe(zip('phantom.zip'))
            .pipe(gulp.dest('C:/Users/Jason/AppData/Roaming/XLink Kai'));
});
