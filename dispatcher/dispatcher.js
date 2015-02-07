var Dispatcher = require('flux').Dispatcher;

var PayloadSources = require('../constants/payload-sources');

var LowTideDispatcher = new Dispatcher();

LowTideDispatcher.handleServerAction = function(action) {
  console.log('server action', action);

  if(!action.type) {
    throw new Error('Empty action.type: you likely mistyped the action.');
  }

  this.dispatch({
    source: PayloadSources.SERVER_ACTION,
    action: action
  })
};

LowTideDispatcher.handleViewAction = function(action) {
  console.log('view action', action);

  if(!action.type) {
    throw new Error('Empty action.type: you likely mistyped the action.');
  }

  this.dispatch({
    source: PayloadSources.VIEW_ACTION,
    action: action
  });
};

module.exports = LowTideDispatcher;
