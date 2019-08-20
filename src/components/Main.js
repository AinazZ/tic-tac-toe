import React, { Component } from 'react';
import { Redirect }         from 'react-router-dom';
import './Main.css';
import Header   from './header';
import GameItem from './game-item';
import AddGame  from './add-game';

export default class Main extends Component {
  constructor() {
    super();

    let games = JSON.parse(localStorage.getItem('games'));

    this.state = {
      redirect: false,
      games:    games
    };

    this.addGame = this.addGame.bind(this);
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/game" />;
    }

    let gamelist = [
      {
        id: 1,
        status: "finished",
        user1:   "Maks",
        user2:   "Kira",
        field:   [
                   'X', 'O', 'X',
                   'O', 'X', null,
                   'O', null, 'X'
        ],
        xIsNext: null,
        step:    7,
        time:    "0:0:15",
        winner:  "Maks"
      },
      {
        id: 2,
        status: "in-progress",
        user1:   "Tony",
        user2:   "Ella",
        field:   [
                   'O', 'X', 'X',
                   'O', 'O', 'X',
                   'X', null, null
        ],
        xIsNext: false,
        step:    8,
        time:    "0:0:25",
        winner:  null
      },
      {
        id: 3,
        status: "open",
        user1:   "Maks",
        user2:   null,
        field:   [
                   null, null, null,
                   null, null, null,
                   null, null, null
        ],
        xIsNext: null,
        step:    0,
        time:    null,
        winner:  null
      }
    ];
    let json = JSON.stringify(gamelist);
    localStorage.setItem('games', json);

    let gameItems = this.state.games.map((game) => (
      <GameItem key={game.id} id={game.id} status={game.status} user1={game.user1} user2={game.user2} time={game.time} winner={game.winner} onClick={(id) => this.showGame(game.id)} />
    ));

    return (
      <div className="Main">
        <Header />
        <div className="main container">
          <input
            type="text"
            className="user"
            name="user"
            ref={el=>this.user=el}
          />
          <div className="gameList container">
            {gameItems}
          </div>
          <AddGame onClick={this.addGame}/>
        </div>
      </div>
    );
  }

  showGame(id) {
    let userName=this.user.value;
    JSON.stringify(localStorage.setItem('user', userName));
    JSON.stringify(localStorage.setItem('game_id', id));

    this.setState({
      redirect: true
    });
  }

  addGame() {
    let newGame = {
      id: 1,
      user1: this.user.value,
      user2: null,
      field: [
               null, null, null,
               null, null, null,
               null, null, null
      ],
      step: null,
      time: null,
      winner: null
    };
    this.state.games.push(newGame);
    let json = JSON.stringify(this.state.games);
    localStorage.setItem('games', json);
    this.setState({games: JSON.parse(localStorage.getItem('games'))});
  }
}
