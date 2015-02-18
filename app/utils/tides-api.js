var request = require('superagent');
var config = require('../config/ham-weather');
var getGeolocation = require('./geolocation');

var BASE_URL = config.BASE_URL;
var CLIENT_ID = config.CLIENT_ID;
var CLIENT_SECRET = config.CLIENT_SECRET;

function _formatUrl(coords) {
  // var url = BASE_URL + String(zip);
  var url = BASE_URL;
  url += 'closest?p=' + coords.lat + ',' + coords.lon;
  url += '&to=+1week';
  url += '&client_id=' + CLIENT_ID;
  url += '&client_secret=' + CLIENT_SECRET;

  return url;
}

function _formatGeoposition(geoposition) {
  var coords = {
    lat: geoposition.coords.latitude,
    lon: geoposition.coords.longitude
  };

  return coords;
}

function _handleFailedGeolocationQuery(err) {

  console.log(err);

  // PositionError
  // code: 1
  // message: "User denied Geolocation"

  // then query user for zip code
  return err;
}

function _requestTidePredictions() {
  getGeolocation(function(err, geoposition) {
    if (err) {
      return _handleFailedGeolocationQuery(err);
    }

    var coordinates = _formatGeoposition(geoposition);
    var url = _formatUrl(coordinates);

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
  });
}

module.exports = {
  requestTidePredictions: _requestTidePredictions
};
