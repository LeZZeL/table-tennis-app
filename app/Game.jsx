import React from 'react';
import Button from './components/Button/Button.jsx';
import StartScreen from './components/StartScreen/StartScreen.jsx';

const Game = React.createClass({

  getInitialState: function() {
    return {
      playerOneScore: 0,
      playerTwoScore: 0,
      playerOneSets: 0,
      playerTwoSets: 0,
      totalScore: 0,
      serviceTaker: 1,
      startScreenActive: false,
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

  closeNewGameScreen: function() {
    this.setState({
      startScreenActive: false
    });
  },

  render: function() {
    return (
      <div>
        {this.state.playerOneScore}
        <Button valueButton="+1 player one" onClick={this.increaseScore}/>

        <Button valueButton="start a new game" onClick={this.startNewGame}/>

        {this.state.startScreenActive ? <StartScreen /> : null}

      </div>
    )
  }
});

export default Game;
