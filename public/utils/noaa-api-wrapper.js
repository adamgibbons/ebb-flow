var tides = [
  {time: '09:40 AM', level: '1.16', dateString: 'Monday, January 25th'},
  {time: '09:02 PM', level: '1.36', dateString: 'Monday, January 25th'},
  {time: '10:05 AM', level: '1.90', dateString: 'Tuesday, January 26th'},
  {time: '10:50 PM', level: '0.82', dateString: 'Tuesday, January 26th'}
];

module.exports = {
  requestTidePredictions: function() {
    require('../actions/tide-prediction-action-creators').receiveTidePredictions(tides);
    require('../actions/tide-prediction-action-creators').getFirstLowTide();
  }
};