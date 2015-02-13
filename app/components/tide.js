var React = require('react/addons');

var Tide = React.createClass({
  formatType: function(type) {
    return type === 'h' ? 'high tide' : 'low tide';
  },

  render: function() {
    return (<span>{this.formatType(this.props.type)}</span>);
  }
});

module.exports = Tide;