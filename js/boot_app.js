var React = require('react');
var MainView = require('./views/main_view');

var bootApp = function(appContainer){
  return React.render(
    React.createElement(MainView),
    appContainer
  );
}

module.exports = bootApp;
