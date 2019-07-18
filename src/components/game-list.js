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
                     ['X', null, null]
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
                     [null, null, null],
                     [null, null, null],
                     [null, null, null]
          ],
          step:    null,
          time:    null,
          winner:  null
        }
      ]
    }
  }

  render() {
    let gameItems = this.state.games.map(e => (
      <Game user1={e.user1} user2={e.user2} step={e.step} time={e.time} winner={e.winner} />
    ));

    return (
      <div>
        <input className="user"></input>
        <div className="gameList container">
          {gameItems}
        </div>
      </div>
    );
  }
}
