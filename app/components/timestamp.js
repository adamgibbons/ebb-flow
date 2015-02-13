var React = require('react');
var UnixTimestamp = require('unix-timestamp');

var Timestamp = React.createClass({
  formatTimestamp: function(timestamp) {
    return UnixTimestamp.toDate(timestamp).toString();
  },

  render: function() {
    var classes = 'prediction-component timestamp';

    return <span className={classes}>{this.formatTimestamp(this.props.seconds)}</span>;
  }
});

module.exports = Timestamp;