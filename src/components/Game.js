import React, { Component } from 'react';
import { Redirect }         from 'react-router-dom';
import './Game.css';
import Header    from './header';
import GameBoard from './game-board';
import Surrender from './surrender';
import Back      from './back';

export default class Game extends Component {
  constructor(props) {
    super(props);

    let user    = localStorage.getItem('user');
    let game_id = localStorage.getItem('game_id');
    let games   = JSON.parse(localStorage.getItem('games'));

    this.state = {
      redirect: false,
      disabled: false,
      game:     games.find(game => game.id==game_id)
    };

    this.surrender    = this.surrender.bind(this);
    this.leaveTheGame = this.leaveTheGame.bind(this);
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/" />;
    }

    let {status, user1, user2, field, xIsNext, time} = this.state.game;
    const winner = calculateWinner(field);

    if(winner) {
      status = "finished";
    }

    let button = null;
    if(status === "finished") {
      button = <Back onClick={this.surrender} />;
    }
    else {
      button = <Surrender onClick={this.leaveTheGame} />;
    }

    return (
      <div className="Game">
        <Header />
        <GameBoard
          player1={user1}
          player2={user2}
          field={field}
          xIsNext={xIsNext}
          time={time}
          disabled={this.state.disabled}
          onClick={(i) => this.handleClick(i)}
        >
        </GameBoard>
        {button}
      </div>
    );
  }

  handleClick(i) {
    const field = this.state.game.field.slice();
    if(calculateWinner(field) || field[i]) {
      return;
    }
    field[i] = this.state.game.xIsNext ? "X" : "O";
    this.setState({
      game: {
        status: "in-progress",
        user1: this.state.game.user1,
        user2: this.state.game.user2,
        field: field,
        xIsNext: !this.state.game.xIsNext
      }
    });
  }

  surrender(){
    this.setState({
      game: {
        status: "finished",
        winner: this.state.game.xIsNext ? this.state.game.user2 : this.state.game.user1
      }
    });
    console.log(this.state.game.winner);
    this.setState({
      redirect: true
    });
  }

  leaveTheGame(){
    this.setState({
      redirect: true
    });
  }
}

function calculateWinner(field) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (field[a] && field[a] === field[b] && field[a] === field[c]) {
      return field[a];
    }
  }
  return null;
}
