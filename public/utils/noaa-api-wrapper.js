var tides = [
  {time: '09:40 AM', 'level': '1.16'},
  {time: '09:02 PM', 'level': '1.36'}
];

module.exports = {
  getTodaysLowTides: function() {
    console.log("ActionCreators");
    require('../actions/tide-prediction-action-creators').receiveTidePredictions(tides)
  }
};