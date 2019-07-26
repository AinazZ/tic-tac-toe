import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';
import Main from './components/Main';
import Game from './components/Game';
//import TicTacToe from './components/TicTacToe';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
      <Route path="/game" component={Game}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
