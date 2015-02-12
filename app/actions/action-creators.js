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

  requestTidePredictions: function() {
    TidesApi.requestTidePredictions();
  },

  receiveTidePredictions: function(data) {
    Dispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_TIDE_PREDICTIONS,
      predictions: data
    });
  }

};
