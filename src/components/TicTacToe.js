import React, { Component } from 'react';

import './TicTacToe.css';
import GameList from './game-list';
import Header from './header';

export default class TicTacToe extends Component {
  render() {
    return (
      <div className="TicTacToe">
        <Header />
        <GameList />
      </div>
    );
  }
}
