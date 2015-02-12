var mockData = require('../utils/mock-data.json');

module.exports = {
  requestTidePredictions: function() {
    // do some api handwaving...
    require('../actions/action-creators').receiveTidePredictions(mockData);
  }
};

