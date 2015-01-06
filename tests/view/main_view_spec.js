var Helpers = require('./helpers');
var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    sinon = require('sinon');

var MainView = require('../../js/views/main_view.jsx'),
    StationsView = require('../../js/views/stations_view.jsx'),
    StationDetailView = require('../../js/views/station_detail_view.jsx');

describe('MainView', function(){
    it('defaults to rendering a stations view component', function(){
        var mainView = Helpers.renderIsolatedReactComponent(MainView);
        var stationsView = TestUtils.findRenderedComponentWithType(mainView, StationsView);
        expect(stationsView).to.exist;
    });

    it('renders a station detail view when a station is provided in the props', function(){
        var appState = {
            station: 'slime'
        };
        var mainView = Helpers.renderIsolatedReactComponent(MainView, appState);

        var stationDetailView = TestUtils.findRenderedComponentWithType(mainView, StationDetailView);
        expect(stationDetailView).to.exist;
    });

});
