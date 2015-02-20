var React = require('react');
var Moment = require('moment');

var Timestamp = React.createClass({
  formatDate: function(unixTimestamp) {
    return Moment.unix(unixTimestamp).format("ddd, MMM Do");
  },

  formatTime: function(unixTimestamp) {
    return Moment.unix(unixTimestamp).format("h:mm a");
  },

  render: function() {
    var classes = 'prediction-component timestamp';

    return (
      <span className={classes}>
        {this.formatTime(this.props.seconds)}
        <br/>
        {this.formatDate(this.props.seconds)}
      </span>
    );

  }
});

module.exports = Timestamp;