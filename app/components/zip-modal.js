var React = require('react/addons');
var ActionCreators = require('../actions/action-creators');
var ApplicationStore = require('../stores/application-store');
var ListenToStore = require('../utils/listen-to-store');

var ZipInput = React.createClass({

  mixins: [ListenToStore],

  stores: [ApplicationStore],

  getInitialState: function() {
    return {
      zip: '',
      isVisible: false
    };
  },

  getStateFromStore: function() {
    this.setState({
      isVisible: ApplicationStore.usingZip()
    });
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
    var classes = React.addons.classSet({
      'visible': this.state.isVisible
    });

    return (
      <div className={classes} id="zip-input">
        <label>Zip code</label>
        <input type="text" name="zip" onChange={this.handleTextInput} ref='zipInput'/>
        <button onClick={this.handleClick}>Go</button>
      </div>
    );
  }
});

module.exports = ZipInput;