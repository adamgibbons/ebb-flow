var React = require('react/addons');
var EventEmitter = require('events').EventEmitter;
var ActionCreators = require('../actions/action-creators');

var ApplicationStore = require('../stores/application-store');
var ListenToStore = require('../utils/listen-to-store');

var ee = new EventEmitter();

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

var PredictionsList = React.createClass({

  render: function() {

    var self = this;
    var predictions = this.props.predictions.map(function (p, idx) {
      return <Prediction level={p.level} time={p.time} isActive={idx === self.props.currentPrediction} />;
    });

    return <div className="prediction-list">{predictions}</div>;
  }
});

var Prediction = React.createClass({

  render: function() {

    var classes = React.addons.classSet({
      'prediction': true,
      'active': this.props.isActive
    });

    return (
      <div className={classes}>
        <p>{this.props.level} ft at {this.props.time}</p>
      </div>
    );
  }
});

var NavigationMenu = React.createClass({

  getPreviousPrediction: function() {
    ActionCreators.getPreviousPrediction();
  },

  getNextPrediction: function() {
    ActionCreators.getNextPrediction();
  },

  render: function() {
    return (
      <nav className="navigation-menu">
        <button className="btn" onClick={this.getPreviousPrediction}>Previous</button>
        <button className="btn" onClick={this.getNextPrediction}>Next</button>
      </nav>
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