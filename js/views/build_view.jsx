var React = require('react');

module.exports = React.createClass({
    render: function() {
        var build = this.props.data;
          return (
                  <div className="build">
                      <h3 className="buildName">{build.name}</h3>
                      Job {build.lastBuildLabel} was {build.lastBuildStatus} at {build.lastBuildTime}
                  </div>
          );
    }
});
