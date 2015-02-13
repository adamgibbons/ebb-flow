var React = require('react/addons');

var Timestamp = require('./timestamp');
var Tide = require('./tide');

var Period = React.createClass({
  getStateFromStore: function() {},

  render: function() {
    var classes = React.addons.classSet({
      'prediction': true,
      'active': this.props.isActive
    });

    return (
      <div className={classes}>
        <p>
          <Tide type={this.props.type}/>
          <br/>
          {this.props.level} ft
          <br/>
          <Timestamp seconds={this.props.timestamp}/>
        </p>
      </div>
    );
  }
});

module.exports = Period;