function getCurrentPosition(cb, _options) {
  var options = _options || {};

  options = {
    enableHighAccuracy: options.enableHighAccuracy || false,
    timeout: options.timeout || 5000,
    maximumAge: options.maximumAge || 0    
  };

  function handleSuccess(data) {
    return cb(null, data);
  }

  function handleFailure(err) {
    return cb(err);
  }

  navigator.geolocation.getCurrentPosition(handleSuccess, handleFailure, options);
}

module.exports = getCurrentPosition;
