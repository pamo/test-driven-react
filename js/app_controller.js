var appController = function(appRenderer,stationsRepo){
  var stations = stationsRepo.getStations();

  var onStationClicked = function(stationId){
	console.log("Clicked on".concat(stationId));
	appRenderer({station: "slime"});
  };

  var appState = {
    stations: stations,
    onStationClicked: onStationClicked
  }

  appRenderer(appState);
}

module.exports = appController;
