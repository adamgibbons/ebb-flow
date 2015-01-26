var React = require('react');

var ListenToStore = require('../utils/listen-to-store');
var TidePredictionsActionCreators = require('../actions/tide-prediction-action-creators');
var TidePredictionsStore = require('../stores/tide-predictions-store');

var LowTideList = React.createClass({

  mixins: [ListenToStore],

  stores: [TidePredictionsStore],

  componentWillMount: function() {
    TidePredictionsActionCreators.requestTidePredictions();
  },
  
  getInitialState: function() {
    return {
      levels: ''
    }
  },

  getStateFromStore: function() {
    this.setState({
      levels: TidePredictionsStore.getLowTidePredictions()
    });
  },

  render: function() {

    var listItems = [];

    if (this.state.levels) {
      this.state.levels.forEach(function (prediction) {
        listItems.push(<LowTideRow time={prediction.time} level={prediction.level} />);
      });
    }

    return (
      <div>
        <p>Santa Cruz, California<br/>Low Tides</p>
        <p className='date'>Monday, January 25th</p>
        <ul className='tide-list'>{listItems}</ul>
      </div>
    );
  }
});

var LowTideRow = React.createClass({
  render: function() {
    return (
      <li className='tide-list-item'>{this.props.level} ft @ {this.props.time}</li>
    );
  }
});

module.exports = LowTideList;