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

    /*this.state = {
      user1: 'user1',
      user2: 'user2',
      field: Array(9).fill(null),
      xIsNext: true,
      time: 0,
      winner: null
    };*/

    let user    = localStorage.getItem('user');
    let game_id = localStorage.getItem('game_id');
    let games   = JSON.parse(localStorage.getItem('games'));

    this.state = {
      redirect: false,
      game:     games.find(game => game.id==game_id)
    };

    this.leaveTheGame = this.leaveTheGame.bind(this);
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/" />;
    }

    let {status, user1, user2, field, xIsNext, step, time, winner} = this.state.game;

    let button = null;
    if(winner) {
      button = <Back onClick={this.leaveTheGame} />;
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
          onClick={(i) => this.handleClick(i)}
        />
        {button}
      </div>
    );
  }

  handleClick(i) {
    console.log(i);
  }

  leaveTheGame(){
    this.setState({
      redirect: true
    });
  }
}
