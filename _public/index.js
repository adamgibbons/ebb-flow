require('./utils/object-assign');

var React = require('react');

var ListenToStore = require('./utils/listen-to-store');
var TidePredictionsStore = require('./stores/tide-predictions-store');
var TidePredictionsActionCreators = require('./actions/tide-prediction-action-creators');
var LowTide = require('./components/low-tide');
var Swiper = require('react-swiper');

React.initializeTouchEvents(true);

var App = React.createClass({

  mixins: [ListenToStore],

  stores: [TidePredictionsStore],

  getInitialState: function() {
    return {
      prediction: {}
    };
  },

  getStateFromStore: function() {
    this.setState({
      prediction: TidePredictionsStore.getCurrentPrediction()
    });
  },

  componentWillMount: function() {
    TidePredictionsActionCreators.requestTidePredictions();
  },

  render: function() {
    return (
      <Swiper className='swipe-container full-height' onSwipeLeft={this.handleSwipeLeft}>
        <LowTide prediction={this.state.prediction} />
      </Swiper>
    );
  },

  handleSwipeLeft: function() {
    console.log("swiping left...");
    TidePredictionsActionCreators.getNextLowTide();
  }
});

React.render(<App/>, document.getElementById('app'));
