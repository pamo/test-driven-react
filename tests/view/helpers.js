require('../helpers');
var React = require('react');

var renderIsolatedReactComponent = function(componentKlass,componentProps){
  if( typeof componentProps == 'undefined' ) componentProps = {};

  var element = React.createElement(componentKlass,componentProps);
  var container = document.createElement('div');

  return React.render(element,container);
};

var Helpers = {
  renderIsolatedReactComponent: renderIsolatedReactComponent
};

module.exports = Helpers;
