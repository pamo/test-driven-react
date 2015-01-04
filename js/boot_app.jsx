var React = require('react');
var MainView = require('./views/main_view');

var bootApp = function(appContainer){
  var appState = {
    stations: [
      {name: "Embarcadero"},
      {name: "Civic Center"},
      {name: "Bayfair"}
    ]
  };

  var theApp = <MainView {...appState}/>;

  return React.render( theApp, appContainer);
}

module.exports = bootApp;
