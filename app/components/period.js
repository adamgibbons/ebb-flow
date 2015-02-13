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
          <Tide type={this.props.type}/> measuring {this.props.level} ft at <Timestamp seconds={this.props.timestamp}/>
        </p>
      </div>
    );
  }
});

module.exports = Period;