import React from 'react';
import ReactDOM from 'react-dom';
import {handleHistory} from 'fluxible-router';
import provideContext from 'fluxible-addons-react/provideContext';
import Game from './Game.jsx';
import Button from './components/button/Button.jsx';

let Main = React.createClass({
  propTypes: {
    context: React.PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {chosenPage: 'Home'};

  },

  startGame: function(string) {
    this.setState({
      chosenPage: 'Game'
    })
  },

  viewStandings: function(string) {
    this.setState({
      chosenPage: 'Standings'
    })
  },

  viewMatches: function(string) {
    this.setState({
      chosenPage: 'Matches'
    })
  },

  renderChosenPage: function() {
    if (this.state && this.state.chosenPage === 'Home') {
      return (
        <div>Hi</div>
      );
    } else if (this.state.chosenPage === 'Game') {
      return (
        <div><Game /></div>
      );
    } else if (this.state.chosenPage === 'Standings') {
      return (
        <div>Standings</div>
      );
    } else if (this.state.chosenPage === 'Matches') {
      return (
        <div>Matches</div>
      );
    }
  },

  render: function() {
    console.log(this.state);
    return (
      <div className="full-page">
        <Button valueButton="Start Game" onClick={this.startGame}/>
        <Button valueButton="View Matches" onClick={this.viewMatches}/>
        <Button valueButton="View Standings" onClick={this.viewStandings}/>
        {this.renderChosenPage()}
      </div>
    );
  }
});

Main = handleHistory(Main);
Main = provideContext(Main);

export default Main;
