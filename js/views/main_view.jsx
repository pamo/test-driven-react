var React = require('react'),
    _ = require('underscore'),
    BuildList = require('./build_list_view');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="mainView">
      <h1>Builds</h1>
      <BuildList />
    </div>
    );
  }
});
