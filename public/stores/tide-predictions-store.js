var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/action-types');

var createStore = require('../utils/create-store');

var _idx = 0;
var _levels = [];

function _fetchingLevels() {
  _levels = [];
}

function _setPredictions(rawLevels) {
  _levels = rawLevels;
}

function _getFirstLowTide() {
  return _levels[0];
}

function _getNextLowTide() {
  _idx++;

  if (_idx == _levels.length) {
    _idx = 0;
  }

  return _levels[_idx];
}

var TidePredictionStore = createStore({
  getLowTidePredictions: function() {
    return _levels;
  },

  getFirstTidePrediction: function() {
    return _getFirstLowTide();
  },

  getNextTidePrediction: function() {
    return _getNextLowTide();
  },

  getCurrentPrediction: function() {
    return _levels[_idx];
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
      _setPredictions(action.levels);
      TidePredictionStore.emitChange();
      break;

    case ActionTypes.GET_FIRST_LOW_TIDE:
      _getFirstLowTide();
      TidePredictionStore.emitChange();
      break;

    case ActionTypes.GET_NEXT_LOW_TIDE:
      _getNextLowTide();
      TidePredictionStore.emitChange();
      break;

    default:
      // do nothing
  }
});

module.exports = TidePredictionStore;
