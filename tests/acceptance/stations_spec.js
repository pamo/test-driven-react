require('./helpers');

var React = require('react/addons');

var bootApp = require('../../js/boot_app');

describe('the main station list', function() {
  it('lists some stations', function() {
    appContainer = document.createElement('div');
    bootApp(appContainer);

    expect($(appContainer)).to.exist;

    $stations = $(appContainer).find('.station');
    expect($stations).to.exist;
  });
});

