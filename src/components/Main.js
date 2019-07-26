import React, { Component } from 'react';

import './Main.css';
import Header from './header';
import GameList from './game-list';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <GameList />
      </div>
    );
  }
}
