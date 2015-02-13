var ActionTypes = require('../constants/action-types');
var Dispatcher = require('../dispatcher/dispatcher');

var TidesApi = require('../utils/tides-api');

module.exports = {
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

  requestTidePredictions: function(zip) {
    TidesApi.requestTidePredictions(zip);
  },

  receiveTidePredictions: function(predictions) {
    Dispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_TIDE_PREDICTIONS,
      predictions: predictions
    });
  }
};
