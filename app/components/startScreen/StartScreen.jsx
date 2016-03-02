import React from 'react';
import Player from '../player/Player.jsx';

const startScreen = React.createClass({

  render: function() {
    return (
      <div>
        <label>Player 1) </label><Player />
        <label>Player 2) </label><Player />
      </div>
    );
  }
});

export default startScreen;