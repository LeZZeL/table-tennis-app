import React from 'react';
import Button from './components/Button/Button.jsx';

const Game = React.createClass({

  getInitialState: function() {
    return {
      playerOneScore: 0,
      playerTwoScore: 0,
      playerOneSets: 0,
      playerTwoSets: 0,
      totalScore: 0,
      serviceTaker: 1,
    };
  },

  resetScore: function() {
    this.setState({
      playerOneScore: 0,
      playerTwoScore: 0
    });
  },

  scoreDifferenceHigherThenTwo: function() {

  },

  addPointToPlayerOne: function() {
    this.setState({
      playerOneScore: this.state.playerOneScore + 1
    });
  },

  addPointToPlayerTwo: function() {
    this.setState({
      playerTwoScore: this.state.playerTwoScore + 1
    });
  },

  determineServiceTaker: function() {

  },

  increaseScore: function() {
    this.setState({
      playerOneScore: this.state.playerOneScore + 1
    });
  },

  startNewGame: function() {

  },

  render: function() {
    return (
      <div>
        <Button onClick={this.startNewGame}/>

        {this.state.playerOneScore}
        <Button onClick={this.increaseScore}/>
      </div>
    )
  }
});

export default Game;
