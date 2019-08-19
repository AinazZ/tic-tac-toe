import React, { Component } from 'react';
import { Redirect }         from 'react-router-dom';
import './Game.css';
import Header    from './header';
import GameBoard from './game-board';
import Timer     from './timer';
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
      redirect: false,
      game:     games.find(game => game.id==game_id)
    };
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/" />;
    }

    const {user1, user2, field, xIsNext, time, winner} = this.state.game;
    let disabled = winner ? true : false;

    return (
      <div className="Game">
        <Header />
        <GameBoard
          player1={user1}
          player2={user2}
          field={field}
          xIsNext={xIsNext}
          onClick={(i) => this.handleClick(i)}
          disabled={disabled}
        />
        <Timer time={time} />
        <Surrender
          onClick={this.surrender.bind(this)}
          disabled={disabled}
        />
      </div>
    );
  }

  handleClick(i) {
    const {xIsNext, field} = this.state;
  }

  surrender(){
    this.setState({
      redirect: true
    });
  }
}
