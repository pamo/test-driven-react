var React = require('react'),
    _ = require('underscore');

module.exports = React.createClass({
  render: function(){
    var stationNodes = _.map( this.props.stations, function(station,ix){
      return <li className="station" key={ix}>{station.name}</li>;
    });
    return (
      <ul>
        {stationNodes}
      </ul>
    );
  }
});
