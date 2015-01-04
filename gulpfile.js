var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    _ = require('underscore'),
    del = require('del'),
    glob = require('glob'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify');

var BUILD_DIR = 'build';

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('clean', function(cb){
  return del([BUILD_DIR],cb);
});

gulp.task('copy', function () {
  var inputs = [
    './index.html'
  ];

  return gulp.src(inputs)
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('js', function() {
  var bundler = browserify({
      entries: ['./app.js'],
      basedir: './js',
      //extensions: ['.jsx'],
      debug: true
    });
  //bundler.transform('reactify');

  return bundler.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(BUILD_DIR));
});

// this task is called from testem's before hook
gulp.task('acceptance-js', function() {
  var specFiles = glob.sync('./tests/acceptance/**/*_spec.js');
  var bundler = browserify({
    entries: specFiles,
    debug: true,
    //extensions: ['.jsx']
  });

  return bundler.bundle()
    .pipe(source('acceptance_specs.js'))
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
