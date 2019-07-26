import React, { Component } from 'react';

import './Game.css';
import Header from './header';
import GameBoard from './game-list';

export default class Game extends Component {
  render() {
    return (
      <div className="Game">
        <Header />
        <GameBoard />
      </div>
    );
  }
}
