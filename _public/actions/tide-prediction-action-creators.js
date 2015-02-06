var ActionTypes = require('../constants/action-types');
var Dispatcher = require('../dispatcher/dispatcher');

var TideApi = require('../utils/noaa-api-wrapper');

module.exports = {
  getNextLowTide: function() {
    Dispatcher.handleViewAction({
      type: ActionTypes.GET_NEXT_LOW_TIDE
    });
  },

  getFirstLowTide: function() {
    Dispatcher.handleViewAction({
      type: ActionTypes.GET_FIRST_LOW_TIDE
    });
  },

  requestTidePredictions: function() {
    Dispatcher.handleViewAction({
      type: ActionTypes.REQUEST_TIDE_PREDICTIONS
    });

    TideApi.requestTidePredictions();
  },

  receiveTidePredictions: function(predictions) {
    Dispatcher.handleViewAction({
      type: ActionTypes.RECEIVE_RAW_TIDE_PREDICTIONS,
      levels: predictions
    });
  }
};
