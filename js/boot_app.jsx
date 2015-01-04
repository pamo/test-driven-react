var React = require('react');
var MainView = require('./views/main_view');

var bootApp = function(appContainer){
  var theApp = <MainView/>;

  return React.render( theApp, appContainer);
}

module.exports = bootApp;
