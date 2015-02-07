var React = require('react/addons');

var ActionCreators = require('../actions/action-creators');
var ApplicationStore = require('../stores/application-store');
var ListenToStore = require('../utils/listen-to-store');

var NavigationMenu = require('./navigation-menu');
var PredictionsList = require('./predictions-list');

var Application = React.createClass({

  mixins: [ListenToStore],

  stores: [ApplicationStore],

  getStateFromStore: function() {
    this.setState({
      idx: ApplicationStore.getPredictionIndex()
    });
  },

  getInitialState: function(props) {
    props = props || this.props;

    return {
      predictions: props.predictions,
      idx: 0
    };
  },

  componentWillReceiveProps: function (newProps, oldProps) {
    this.setState(this.getInitialState(newProps));
  },

  componentWillMount: function() {
    // call api for predictions
    this.props.predictions = predictionsData;
  },

  render: function() {
    return (
      <div>
        <h5>Santa Cruz, California</h5>
        <PredictionsList {...this.props} currentPrediction={this.state.idx}/>
        <NavigationMenu/>
      </div>
    );
  }
});

var predictionsData = [
  {level: 1.5, time: '2:30am'},
  {level: 2.2, time: '2:30pm'},
  {level: 0.3, time: '3:28am'},
  {level: -.7, time: '3:14pm'}
];

module.exports = Application;