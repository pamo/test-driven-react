var Helpers = require('./helpers'),
    _ = require('underscore'),
    sinon = require('sinon');

var appController = require('../../js/app_controller');

var nullRenderer = _.identity;

describe( 'appController', function(){
  it('exists', function(){
    expect(appController).to.exist;
    expect(appController).to.satisfy(_.isFunction);
  });

  it('loads stations from the station repo', function(){
    var spyStationsRepo = {
      getStations: sinon.spy()
    };

    appController(nullRenderer,spyStationsRepo);

    expect(spyStationsRepo.getStations).to.have.been.called;
  });

  it('passes stations from the repo into the app state', function(){
    var stationsFromRepo = [
          {name:"station one"},
          {name:"station two"}
        ],
        fakeStationsRepo = {
          getStations: _.constant(stationsFromRepo)
        },
        spyRenderer = sinon.spy();

    appController(spyRenderer,fakeStationsRepo);

    expect(spyRenderer).to.have.been.called;
    var appStatePassedToRenderer = spyRenderer.firstCall.args[0];
    expect( appStatePassedToRenderer ).to.have.property('stations');
    expect( appStatePassedToRenderer.stations ).to.equal(stationsFromRepo);

  });
});
