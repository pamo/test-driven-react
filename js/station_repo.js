var createStationRepo = function(){
  var getStations = function(){
    return [
      {id:"embr", name:"Embarcadero"},
      {id:"plza", name:"El Cerrito Plaza"},
      {id:"nbrk", name:"North Berkeley"},
      {id:"dbrk", name:"Downtown Berkeley"},
      {id:"civc", name:"Civic Center"},
      {id:"bayf", name:"Bayfair"}
    ];
  };

  return {
    getStations:getStations
  };
};

module.exports = createStationRepo;
