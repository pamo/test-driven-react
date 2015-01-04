var bootApp = require('./boot_app');

var boot = function(){
  var appContainer = document.getElementsByTagName('main')[0];
  bootApp(appContainer);
};

setTimeout( boot, 0 );

