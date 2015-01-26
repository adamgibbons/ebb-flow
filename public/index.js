require('./utils/object-assign');

var React = require('react');

var LowTide = require('./components/low-tide');
var Swiper = require('react-swiper');

React.initializeTouchEvents(true);

var App = React.createClass({
  render: function() {
    return (
      <Swiper className='swipe-container full-height' onSwipeLeft={this.handleSwipeLeft} onSwipeRight={this.handleSwipeRight}>
        <LowTide/>
      </Swiper>
    );
  },

  handleSwipeRight: function(e) {
    console.log(e);
  },

  handleSwipeLeft: function(e) {
    console.log(e);
  },
});

React.render(<App/>, document.getElementById('app'));
