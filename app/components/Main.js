var React = require('react');

var Main = React.createClass({

  render: function () {
    return (
      <h1>
        Hello There.
      </h1>
    )
  }

});

React.render( <Main />, document.getElementById('app'));
