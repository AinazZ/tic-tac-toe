import React, { Component } from 'react';

import './TicTacToe.css';
import Game from './game';
import Header from './header';

export default class TicTacToe extends Component {
  render() {
    return (
      <div className="TicTacToe">
        <Header />
        <Game />
      </div>
    );
  }
}
