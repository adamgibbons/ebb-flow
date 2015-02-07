var ActionTypes = require('../constants/action-types');
var Dispatcher = require('../dispatcher/dispatcher');

// var TideApi = require('../utils/some-api');

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
  }
};
