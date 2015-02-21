var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/action-types');

var createStore = require('../utils/create-store');

var _predictionIndex = 0;
var _predictions = [];
var _loaded = false;

var _useGeolocation = true;
var _useZip = false;

function _denyGeolocation() {
  _useGeolocation = false;
  _useZip = true;
}

function _loadPredictions(predictions) {
  _predictions = predictions;
  _loaded = true;
}

function _incrementPredictionIndex() {
  return _predictionIndex += 1;
}

function _decrementPredictionIndex() {
  return _predictionIndex -= 1;
}

var ApplicationStore = createStore({
  getPredictionIndex: function() {
    return _predictionIndex;
  },

  getPredictions: function() {
    return _predictions;
  },

  isLoaded: function() {
    return _loaded;
  },

  usingGeolocation: function() {
    return _useGeolocation;
  },

  usingZip: function() {
    return _useZip;
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

    case ActionTypes.RECEIVE_TIDE_PREDICTIONS:
      _loadPredictions(action.predictions);
      ApplicationStore.emitChange();
      break;

    case ActionTypes.DENY_GEOLOCATION:
      _denyGeolocation();
      ApplicationStore.emitChange();
      break;

    // case ActionTypes.SUBMIT_ZIP_CODE:
    //   _show

    default:
      // do nothing
  }
});

module.exports = ApplicationStore;
