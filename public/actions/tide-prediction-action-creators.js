var ActionTypes = require('../constants/action-types');
var Dispatcher = require('../dispatcher/dispatcher');

var TideApi = require('../utils/noaa-api-wrapper');

module.exports = {
  requestTidePredictions: function() {
    Dispatcher.handleViewAction({
      type: ActionTypes.REQUEST_TIDE_PREDICTIONS
    });

    TideApi.getTodaysLowTides();
  },

  receiveTidePredictions: function(predictions) {
    Dispatcher.handleViewAction({
      type: ActionTypes.RECEIVE_RAW_TIDE_PREDICTIONS,
      levels: predictions
    })
  }
};
