var React = require('react');
var ActionCreators = require('../actions/action-creators');

var ZipInput = React.createClass({

  getInitialState: function() {
    return {
      zip: ''
    };
  },

  handleTextInput: function() {
    this.setState({
      zip: this.refs['zipInput'].getDOMNode().value
    });
  },

  handleClick: function() {
    ActionCreators.requestTidePredictionsByZip(this.state.zip);
  },

  render: function() {
    return (
      <div className="zip-input">
        <label>Zip code</label>
        <input type="text" name="zip" onChange={this.handleTextInput} ref='zip-input'/>
        <button onClick={this.handleClick}>Go</button>
      </div>
    );
  }
});

module.exports = ZipInput;