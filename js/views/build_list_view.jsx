var React = require('react'),
    Build = require('./build_view');

module.exports = React.createClass({
    render: function() {
          return (
                  <div className="buildList">
                    Hello, world! I am a BuildList.
                    <Build />
                  </div>
          );
    }
});
