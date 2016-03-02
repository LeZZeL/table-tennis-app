import React from 'react';
import Button from './components/button/Button.jsx';
import NavBar from './components/navBar/NavBar.jsx';

const Game = React.createClass({

  getInitialState: function() {
    return {
      playerOneScore: 0,
      playerTwoScore: 0,
      playerOneSets: 0,
      playerTwoSets: 0,
      totalScore: 0,
      serviceTaker: 1
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
    this.setState({
      startScreenActive: true
    });
  },

  render: function() {
    return (
      <div>
        <NavBar />
        {this.state.playerOneScore}
        <Button valueButton="+1 player one" onClick={this.increaseScore}/>
        <Button valueButton="start a new game" onClick={this.startNewGame}/>
      </div>
    )
  }
});

export default Game;
