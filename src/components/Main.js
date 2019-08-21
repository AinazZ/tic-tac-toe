import React, { Component } from 'react';
import { Redirect }         from 'react-router-dom';
import './Main.css';
import Header   from './header';
import GameItem from './game-item';
import AddGame  from './add-game';

let gamelist = [
  {
    id:      1,
    status:  "finished",
    user1:   "Maks",
    user2:   "Kira",
    field:   [
               'X', 'O', 'X',
               'O', 'X', null,
               'O', null, 'X'
             ],
    xIsNext: null,
    time:    "0:0:15",
    winner:  "Maks"
  },
  {
    id:      2,
    status:  "in-progress",
    user1:   "Tony",
    user2:   "Ella",
    field:   [
               'O', 'X', 'X',
               'O', 'O', 'X',
               'X', null, null
             ],
    xIsNext: false,
    time:    "0:0:25",
    winner:  ""
  },
  {
    id:      3,
    status:  "open",
    user1:   "Maks",
    user2:   "",
    field:   Array(9).fill(null),
    xIsNext: true,
    time:    null,
    winner:  ""
  }
];
let json     = JSON.stringify(gamelist);
localStorage.setItem('games', json);

export default class Main extends Component {
  constructor(props) {
    super(props);

    let games = JSON.parse(localStorage.getItem('games'));

    this.state = {
      redirect: false,
      user:     '',
      games:    games
    };

    this.showGame = this.showGame.bind(this);
    this.addGame  = this.addGame.bind(this);
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/game" />;
    }

    let games = this.state.games.sort(function (a,b) {
      if (b.status > a.status) {
        return 1;
      }
      if (b.status < a.status) {
        return -1;
      }
      return 0;
    });
    let gameItems = games.map((game) => (
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
          <AddGame onClick={this.addGame} />
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
    let length = this.state.games.length;
    let newGame = {
      id: length + 1,
      status: 'open',
      user1: this.user.value,
      user2: "",
      field: Array(9).fill(null),
      xIsNext: true,
      time: null,
      winner: ""
    };
    this.state.games.push(newGame);
    localStorage.setItem('games', JSON.stringify(this.state.games));
    this.setState({games: JSON.parse(localStorage.getItem('games'))});
  }
}
