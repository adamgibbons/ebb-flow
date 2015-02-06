var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/action-types');

var createStore = require('../utils/create-store');

var _predictionIndex = 0;

function _getPredictionIndex() {
  return _predictionIndex;
}

function _incrementPredictionIndex() {
  return _predictionIndex += 1;
}

function _decrementPredictionIndex() {
  return _predictionIndex -= 1;
}

ApplicationStore = createStore({
  getPredictionIndex: function() {
    return _predictionIndex;
  }
});

ApplicationStore.dispatchToken = Dispatcher.register(function (payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.GET_NEXT_PREDICTION:
      _incrementPredictionIndex();
      ApplicationStore.emitChange();
      break;

    case ActionTypes.GET_PREVIOUS_PREDICTION:
      _decrementPredictionIndex();
      ApplicationStore.emitChange();
      break;

    default:
      // do nothing
  }
});

module.exports = ApplicationStore;

  //   ee.on('requested-previous-prediction', function(e) {
  //     self.setState({idx: self.state.idx - 1});
  //   });

  //   ee.on('requested-next-prediction', function(e) {
  //     self.setState({idx: self.state.idx + 1});
  //   });