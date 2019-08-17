import React, { Component } from 'react';
import './Game.css';
import Header from './header';
import GameBoard from './game-board';
import Timer from './timer';
import Surrender from './surrender';

export default class Game extends Component {
  constructor(props) {
    super(props);

    /*this.state = {
      user1: 'user1',
      user2: 'user2',
      field: Array(9).fill(null),
      xIsNext: true,
      time: 0,
      winner: null
    };*/

    let game_id = localStorage.getItem('game_id');
    let games   = JSON.parse(localStorage.getItem('games'));

    this.state = {
      game: games.find(game => game.id==game_id)
    };
  }

  handleClick(i) {
    const {xIsNext, field} = this.state;
  }

  surrender(){
    console.log('Сдаюсь-сдаюсь');
  }

  render() {
    const {user1, user2, field, xIsNext, time} = this.state.game;

    return (
      <div className="Game">
        <Header />
        <GameBoard
          user1={user1}
          user2={user2}
          field={field}
          xIsNext={xIsNext}
          onClick={(i) => this.handleClick(i)}
        />
        <Timer time={time} />
        <Surrender onClick={this.surrender.bind(this)} />
      </div>
    );
  }
}
