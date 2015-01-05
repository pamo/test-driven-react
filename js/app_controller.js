var appController = function(appRenderer,stationsRepo){
  var stations = stationsRepo.getStations();

  var appState = {
    stations: stations
  };

  appRenderer(appState);
}

module.exports = appController;
