import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Main from './components/main/Main';
import Game from './components/game/Game';
import * as serviceWorker from './serviceWorker';

 ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/"    component={Main} />
      <Route path="/game"      component={Game} />
    </Switch>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
