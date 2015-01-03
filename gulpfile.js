var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    _ = require('underscore'),
    del = require('del'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify');

var BUILD_DIR = 'build';

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('clean', function(cb){
  del([BUILD_DIR],cb);
});

gulp.task('copy', function () {
  var inputs = [
    './index.html'
  ];

  gulp.src(inputs)
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('js', function() {
  var bundler = browserify({
      entries: ['./js/app.js'],
      //extensions: ['.jsx'],
      debug: true
    });
  //bundler.transform('reactify');

  bundler.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(BUILD_DIR));
});


gulp.task('build', ['js','copy']);

gulp.task('watch', ['default'], function(){
  var watchOpts = {debounceDelay:2000}, // workaround for editors saving file twice: http://stackoverflow.com/questions/21608480/gulp-js-watch-task-runs-twice-when-saving-files
      watchTargets = {
    './index.html': ['copy'],
    './js/**/*': ['js']
  };
  
  _.each(watchTargets, function(tasks,glob){
    gulp.watch( glob, watchOpts, tasks );
  });
});


gulp.task('default', ['clean','build']);
