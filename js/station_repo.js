var createStationRepo = function(){
  var getStations = function(){
    return [
      {abbr:"embr", name:"Embarcadero"},
      {abbr:"plza", name:"El Cerrito Plaza"},
      {abbr:"nbrk", name:"North Berkeley"},
      {abbr:"dbrk", name:"Downtown Berkeley"},
      {abbr:"____", name:"Civic Center"},
      {abbr:"____", name:"Bayfair"}
    ];
  };

  return {
    getStations:getStations
  };
};

module.exports = createStationRepo;
