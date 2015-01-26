var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/action-types');

var createStore = require('../utils/create-store');

var _levels = [];

function _fetchingLevels() {
  _levels = [];
}

function _addLevels(rawLevels) {
  _levels = rawLevels;
}

var TidePredictionStore = createStore({
  getLowTidePredictions: function() {
    console.log("levels");
    console.log(_levels);
    return _levels;
  }
});

TidePredictionStore.dispatchToken = Dispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.REQUEST_TIDE_PREDICTIONS:
      _fetchingLevels();
      TidePredictionStore.emitChange();
      break;

    case ActionTypes.RECEIVE_RAW_TIDE_PREDICTIONS:
      _addLevels(action.levels);
      TidePredictionStore.emitChange();
      break;

    default:
      // do nothing
  }
});

module.exports = TidePredictionStore;
