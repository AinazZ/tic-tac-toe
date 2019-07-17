import React, { Component } from 'react';

import './game-list.css';
import Game from './game';

export default class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [
        {
          id: 1,
          user1:   "Maks",
          user2:   "Kira",
          field:   [
                     ['X', 'O', 'X'],
                     ['O', 'X', null],
                     ['O', null, 'X']
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
                     ['O', 'X', 'X'],
                     ['O', 'O', 'X'],
                     ['X', null, 'O']
          ],
          step:    null,
          time:    "0:0:25",
          winner:  "Ella"
        },
        {
          id: 3,
          user1:   "Maks",
          user2:   "Ella",
          field:   [
                     [null, null, null],
                     [null, null, null],
                     [null, null, null]
          ],
          step:    "Maks",
          time:    "0:0:5",
          winner:  null
        }
      ]
    }
  }

  render() {
    let gameItems = this.state.games.map(e => (
      <Game user1={e.user1} user2={e.user2} time={e.time} />
    ));

    return (
      <div>
        <input className="user1"></input>
        <div className="gameList container">
          {gameItems}
        </div>
      </div>
    );
  }
}
