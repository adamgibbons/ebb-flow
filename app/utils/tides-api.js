var request = require('superagent');
var config = require('../config/ham-weather');

var BASE_URL = config.BASE_URL;
var CLIENT_ID = config.CLIENT_ID;
var CLIENT_SECRET = config.CLIENT_SECRET;

function _formatUrl(zip) {
  var url = BASE_URL + String(zip);
  url += '?client_id=' + CLIENT_ID;
  url += '&client_secret=' + CLIENT_SECRET;

  return url;
};

function _requestTidePredictions(zip) {
  var url = _formatUrl(zip);

  request.get(url, function (res) {
    if (res.status === 200) {
      if (res.body.success) {
        require('../actions/action-creators').receiveTidePredictions(res.body.response);
      } else {
        console.log('Error while requesting tides info from tides api');
      }
    } else {
      console.log('Error while requesting tides info from tides api:');
      console.log(res);
    }
  });
}

module.exports = {
  requestTidePredictions: _requestTidePredictions
};
