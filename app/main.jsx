import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Game from './Game.jsx';
import StartScreen from './components/startScreen/StartScreen.jsx';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Game}/>
    <Route path="/start" component={StartScreen}/>
  </Router>
), document.getElementById('table-tennis'));