import React from 'react';

const Player = React.createClass({
  getInitialState: function() {
    return {
      name: ''
    };
  },

  handleChange: function(e) {
    this.setState({
      name: e.target.value
    });
  },

  render: function() {
    return (
      <input type="text" value={this.state.name} onChange={this.handleChange} />
    );
  }

});

export default Player;