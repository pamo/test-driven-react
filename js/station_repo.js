var _ = require('underscore');

var createStationRepo = function(){
  var STATIONS = [
      {id:"embr", name:"Embarcadero"},
      {id:"plza", name:"El Cerrito Plaza"},
      {id:"nbrk", name:"North Berkeley"},
      {id:"dbrk", name:"Downtown Berkeley"},
      {id:"civc", name:"Civic Center"},
      {id:"bayf", name:"Bayfair"}
    ];

  var getStations = function(){
    return STATIONS;
  };

  var getStationById = function(stationId){
    return _.findWhere(STATIONS, {id: stationId});
  };

  return {
    getStations:getStations,
    getStationById: getStationById
  };
};

module.exports = createStationRepo;
