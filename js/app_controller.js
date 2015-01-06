var appController = function(appRenderer,stationsRepo){
  var stations = stationsRepo.getStations();

  var appState = {
    stations: stations,
    onStationClicked: function(){}
  };

  appRenderer(appState);
}

module.exports = appController;
