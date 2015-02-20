var request = require('superagent');
var config = require('../config/ham-weather');
var getGeolocation = require('./geolocation');
var ActionCreators = require('../actions/action-creators');

var BASE_URL = config.BASE_URL;
var CLIENT_ID = config.CLIENT_ID;
var CLIENT_SECRET = config.CLIENT_SECRET;

function _formatGeolocationUrl(coords) {
  // var url = BASE_URL + String(zip);
  var url = BASE_URL;
  url += 'closest?p=' + coords.lat + ',' + coords.lon;
  url += '&to=+1week';
  url += '&client_id=' + CLIENT_ID;
  url += '&client_secret=' + CLIENT_SECRET;

  return url;
}

function _formatZipUrl(zip) {
  var url = BASE_URL + String(zip);
  url += '?to=+1week';
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
  // PositionError {message: "User denied Geolocation", code: 1, PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3}
  // PositionError
  // code: 1
  // message: "User denied Geolocation"

  // then query user for zip code

  if (err && err.code === 1) {
    // User denied geolocation
    console.log("user denied geolocation");
    // ActionCreators.denyGeolocation();
  }
}

function _requestTidePredictionsByZip(zip) {
  var url = _formatZipUrl(zip);

  request.get(url, function(res) {
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

function _requestTidePredictionsByGeolocation() {
  getGeolocation(function(err, geoposition) {
    if (err) {
      console.log("here");
      return _handleFailedGeolocationQuery(err);
    }

    var coordinates = _formatGeoposition(geoposition);
    var url = _formatGeolocationUrl(coordinates);

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
  requestTidePredictionsByGeolocation: _requestTidePredictionsByGeolocation,
  requestTidePredictionsByZip: _requestTidePredictionsByZip
};
