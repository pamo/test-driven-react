var Helpers = require('./helpers'),
    _ = require('underscore');

var createStationRepo = require('../../js/station_repo');

var looksLikeStation = function(station){
  var expectedProperties = ["name","abbr"];
  _.each(expectedProperties,function(prop){
    expect(station[prop]).not.to.be.empty;
  });
};

describe( 'station repo', function(){

  it('returns a list of stations', function(){
    var repo = createStationRepo();
    var stations = repo.getStations();

    expect(stations).not.to.be.empty;
    _.each( stations, looksLikeStation );

    var stationNames = _.pluck( stations, "name" );

    expect(stationNames).to.include.members(["Embarcadero","El Cerrito Plaza","North Berkeley"]);
  });

});
