import React, { Component } from 'react';
import './Game.css';
import Header from './header';
import GameBoard from './game-board';
import Timer from './timer';

export default class Game extends Component {
  constructor(props) {
    super(props);

    //this.state = JSON.parse(localStorage.getItem('game'));

    this.state = {
      user1: 'user1',
      user2: 'user2',
      field: Array(9).fill(null),
      xIsNext: true,
      time: 0,
      winner: null
    };
  }

  handleClick(i) {
    const {xIsNext, field} = this.state;
  }

  render() {
    /*let game = {
      game_id: 1,
      user1:   "Maks",
      user2:   "Kira",
      field:   [
                 'X', 'O', 'X',
                 'O', 'X', null,
                 'O', null, 'X'
      ],
      xIsNext: true,
      time:    "0:0:15",
      winner:  "Maks",

      borderBottom: ""
    };
    let json = JSON.stringify(game);
    localStorage.setItem('game', json);*/

    const {user1, user2, field, xIsNext, time} = this.state;

    return (
      <div className="Game">
        <Header />
        <GameBoard
          user1={user1}
          user2={user2}
          time={time}
          field={field}
          xIsNext={xIsNext}
          onClick={(i) => this.handleClick(i)}
        />
        <div className="timer"><Timer /></div>
        <button className="btn surrender">SURRENDER</button>
      </div>
    );
  }
}
