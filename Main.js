import React, { Component } from 'react';
import { Redirect }         from 'react-router-dom';
import './Main.css';
import Header   from '../common/header';
import GameItem from './game-item';
import AddGame  from './add-game';
import Storage  from '../storage/storage';
import NewGame  from './new-game';

export default class Main extends Component {
  constructor(props) {
    super(props);

    let storage = new Storage();
    let games   = storage.get(GAMES);
    if(!games) {
      games = [];
    }

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
      <GameItem
        key={game.id}
        game={game}
        onClick={(id) => this.showGame(game.id)}
      />
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
    let userName = this.user.value;
    let storage  = new Storage();
    let games    = storage.get(GAMES);
    let game     = games.find(game => game.id==id);

    if(userName && !game.user2 && (userName !== game.user1)) {
      game.status = STATUS_IN_PROGRESS;
      game.user2  = userName;

      storage.set(GAMES, games);
    }

    storage.set(USER,userName);
    storage.set(GAME_ID, id);

    this.setState({
      redirect: true
    });
  }

  addGame() {
    let userName = this.user.value;
    if(userName) {
      let length  = this.state.games.length;
      let newGame = new NewGame(length, this.user.value);

      this.state.games.push(newGame);
      let storage = new Storage();
      storage.set(GAMES,this.state.games);
      this.setState({
        games: storage.get(GAMES)
      });
    }
    else {
      alert ("Введите имя пользователя");
    }
  }
}

const STATUS_IN_PROGRESS = "in-progress";
const GAMES              = 'games';
const USER               = 'user';
const GAME_ID            = 'game_id';
