var React = require('react/addons');

var Tide = React.createClass({
  formatType: function(type) {
    return type === 'h' ? '⤴ high' : '⤵ low';
  },

  render: function() {
    var classes='prediction-component tide';
    return (<span className={classes}>{this.formatType(this.props.type)}</span>);
  }
});

module.exports = Tide;