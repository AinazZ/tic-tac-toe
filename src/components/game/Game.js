import React, { Component } from 'react';
import { Redirect }         from 'react-router-dom';
import './Game.css';
import Header    from '../common/header';
import GameBoard from './game-board';
import Timer     from './timer';
import Surrender from './surrender';
import Back      from './back';
import Storage   from '../storage/storage';

export default class Game extends Component {
  constructor(props) {
    super(props);

    let storage = new Storage();
    let game_id = storage.get(GAME_ID);
    let games   = storage.get(GAMES);

    this.state = {
      redirect: false,
      game:     games.find(game => game.id==game_id)
    };

    this.timer = null;

    this.surrender    = this.surrender.bind(this);
    this.leaveTheGame = this.leaveTheGame.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      let storage = new Storage();
      let games   = storage.get(GAMES);
      let game_id = storage.get(GAME_ID);
      let game    = games.find(game => game.id==game_id);
      let time    = this.state.game.time;
      this.setState({
        game: game,
        time: time + 1
      });
    }, INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/" />;
    }

    let {status, user1, user2, field, xIsNext, time} = this.state.game;
    const winner = calculateWinner(field);

    let button   = null;
    let disabled = false;
    let storage  = new Storage();
    let user     = storage.get(USER);

    if(status === STATUS_FINISHED || !user || (user !== user1 && user !== user2)) {
      disabled = true;
      button = <Back onClick={this.leaveTheGame} />;
    }
    else {
      button = <Surrender onClick={this.surrender} />;
    }

    return (
      <div className="Game">
        <Header />
        <GameBoard
          player1={user1}
          player2={user2}
          field={field}
          xIsNext={xIsNext}
          disabled={disabled}
          onClick={(i) => this.handleClick(i)}
        >
        </GameBoard>
        <Timer time={time} />
        {button}
      </div>
    );
  }

  handleClick(i) {
    const field = this.state.game.field.slice();
    field[i] = this.state.game.xIsNext ? "X" : "O";

    let game_id = this.state.game.id;
    let storage = new Storage();
    let games   = storage.get(GAMES);

    let game = games.find(game => game.id==game_id);
      game.status  = STATUS_IN_PROGRESS;
      game.field   = field;
      game.xIsNext = !this.state.game.xIsNext;
      game.time    = this.state.game.time;

    storage.set(GAMES, games);

    this.setState({
      game: game
    });

    if(calculateWinner(field)) {
      let game_id = this.state.game.id;
      let storage = new Storage();
      let games   = storage.get(GAMES);

      let game = games.find(game => game.id==game_id);
        game.status  = STATUS_FINISHED;
        game.time = this.state.game.time;
        game.winner  = this.state.game.xIsNext ? this.state.game.user1 : this.state.game.user2;

      storage.set(GAMES, games);

      this.setState({
        game:     game,
        redirect: true
      });
    }
  }

  surrender(){
    let game_id = this.state.game.id;
    let storage = new Storage();
    let games   = storage.get(GAMES);

    let game = games.find(game => game.id==game_id);
      game.status = STATUS_FINISHED;
      game.time = this.state.game.time;
      game.winner = this.state.game.xIsNext ? this.state.game.user2 : this.state.game.user1;

    storage.set(GAMES, games);

    this.setState({
      game: game,
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

const STATUS_IN_PROGRESS = "in-progress";
const STATUS_FINISHED    = "finished";
const GAMES              = 'games';
const USER               = 'user';
const GAME_ID            = 'game_id';
const INTERVAL           = 1000;
