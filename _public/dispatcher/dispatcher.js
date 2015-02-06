var Dispatcher = require('flux').Dispatcher;

var PayloadSources = require('../constants/payload-sources');

var TideDispatcher = Object.assign(new Dispatcher(), {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction: function(action) {
    console.log('server action', action);

    if(!action.type) {
      throw new Error('Empty action.type: you likely mistyped the action.');
    }

    this.dispatch({
      source: PayloadSources.SERVER_ACTION,
      action: action
    });
  },

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction: function(action) {
    console.log('view action', action);

    if(!action.type) {
      throw new Error('Empty action.type: you likely mistyped the action.');
    }

    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }

});

module.exports = TideDispatcher;
