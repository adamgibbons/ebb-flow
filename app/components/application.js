var React = require('react/addons');

// var ActionCreators = require('../actions/action-creators');
// var ApplicationStore = require('../stores/application-store');
// var ListenToStore = require('../utils/listen-to-store');
// var NavigationMenu = require('./navigation-menu');
// var PredictionsList = require('./predictions-list');

var Application = React.createClass({

  // mixins: [ListenToStore],

  // stores: [ApplicationStore],

  // getStateFromStore: function() {
  //   this.setState({
  //     idx: ApplicationStore.getPredictionIndex(),
  //     predictions: ApplicationStore.getPredictions()
  //   });
  // },

  // getInitialState: function() {
  //   return {
  //     predictions: [],
  //     idx: 0
  //   };
  // },

  // componentWillMount: function() {
  //   ActionCreators.requestTidePredictions();
  // },

  render: function() {

    return (
      <div>
        <h5>Santa Cruz, California</h5>
        
      </div>
    );
  }
});

module.exports = Application;
