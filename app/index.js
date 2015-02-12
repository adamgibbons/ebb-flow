process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var React = require('react');
var Router = require('./router');

React.initializeTouchEvents(true);

Router.run(function (Handler, state) {
  React.render(<Handler {...state}/>, document.getElementById('app-root'));
});
