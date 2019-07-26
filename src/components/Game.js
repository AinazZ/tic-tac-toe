import React, { Component } from 'react';


import Header from './header';
import GameBoard from './game-list';

export default class Game extends Component {
  render() {
    return (
      <div className="TicTacToe">
        <Header />
        <GameBoard />
      </div>
    );
  }
}
