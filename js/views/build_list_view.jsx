var React = require('react'),
    Build = require('./build_view');

module.exports = React.createClass({
    render: function() {
        var builds = this.props.buildData.Projects.Project.map(function(buildObj){
            var build = buildObj.$;
            return (<Build data={build} />); 
        });
          return (
                  <div className="buildList">
                      {builds} 
                  </div>
          );
    }
});
