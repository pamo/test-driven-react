var Helpers = require('./helpers'),
    _ = require('underscore'),
    sinon = require('sinon');

var appController = require('../../js/app_controller');

describe( 'appController', function(){
  it('exists', function(){
    expect(appController).to.exist;
    expect(appController).to.satisfy(_.isFunction);
  });
});
