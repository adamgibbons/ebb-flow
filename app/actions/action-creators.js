var ActionTypes = require('../constants/action-types');
var Dispatcher = require('../dispatcher/dispatcher');

var TidesApi = require('../utils/tides-api');

module.exports = {
  denyGeolocation: function() {
    Dispatcher.handleViewAction({
      type: ActionTypes.DENY_GEOLOCATION
    });
  },

  getNextPrediction: function() {
    Dispatcher.handleViewAction({
      type: ActionTypes.GET_NEXT_PREDICTION
    });
  },

  getPreviousPrediction: function() {
    Dispatcher.handleViewAction({
      type: ActionTypes.GET_PREVIOUS_PREDICTION
    });
  },

  requestTidePredictionsByZip: function(zip) {
    TidesApi.requestTidePredictionsByZip(zip);
  },

  requestTidePredictionsByGeolocation: function() {
    TidesApi.requestTidePredictionsByGeolocation();
  },

  receiveTidePredictions: function(predictions) {
    Dispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_TIDE_PREDICTIONS,
      predictions: predictions
    });
  }
};
