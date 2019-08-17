import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Main.css';
import Header from './header';
import GameItem from './game-item';
import AddGame from './add-game';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      redirect: false,
      games: JSON.parse(localStorage.getItem('games'))
    };
  }

  addGame() {
    let newGame = {
      id: 4,
      user1: this.user.value,
      user2: null,
      field: [
               [null, null, null],
               [null, null, null],
               [null, null, null]
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

  showGame(id) {
    localStorage.setItem('game_id', id);
    this.setState({
      redirect: true
    });
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/game" />;
    }

    let gamelist = [
      {
        id: 1,
        user1:   "Maks",
        user2:   "Kira",
        field:   [
                   'X', 'O', 'X',
                   'O', 'X', null,
                   'O', null, 'X'
        ],
        step:    null,
        time:    "0:0:15",
        winner:  "Maks"
      },
      {
        id: 2,
        user1:   "Tony",
        user2:   "Ella",
        field:   [
                   'O', 'X', 'X',
                   'O', 'O', 'X',
                   'X', null, null
        ],
        step:    "Ella",
        time:    "0:0:25",
        winner:  null
      },
      {
        id: 3,
        user1:   "Maks",
        user2:   null,
        field:   [
                   null, null, null,
                   null, null, null,
                   null, null, null
        ],
        step:    null,
        time:    null,
        winner:  null
      }
    ];
    let json = JSON.stringify(gamelist);
    localStorage.setItem('games', json);
    let gameItems = this.state.games.map((game) => (
      <GameItem key={game.id} id={game.id} user1={game.user1} user2={game.user2} time={game.time} winner={game.winner} onClick={(id) => this.showGame(game.id)} />
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
          <AddGame onClick={this.addGame.bind(this)}/>
        </div>
      </div>
    );
  }
}
