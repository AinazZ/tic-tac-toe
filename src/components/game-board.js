import React, { Component } from 'react';

import './game-board.css';
import Cell from './cell';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      user1:   "Maks",
      user2:   "Kira",
      field:   [
                 ['X', 'O', 'X'],
                 ['O', 'X', null],
                 ['O', null, 'X']
      ],
      step:    "Maks",
      time:    "0:0:15",
      winner:  "Maks"
    };
  }

  render() {
    return (
      <div>
        <div className="players row">
          <div className="user1 col">{this.state.user1} X</div>
          <div className="user2 col">{this.state.user2} O</div>
        </div>
        <div className="field container">
          <div className="row">
            <Cell value={this.state.field[0][0]} />
            <Cell value={this.state.field[0][1]} />
            <Cell value={this.state.field[0][2]} />
          </div>
          <div className="row">
            <Cell value={this.state.field[1][0]} />
            <Cell value={this.state.field[1][1]} />
            <Cell value={this.state.field[1][2]} />
          </div>
          <div className="row">
            <Cell value={this.state.field[2][0]} />
            <Cell value={this.state.field[2][1]} />
            <Cell value={this.state.field[2][2]} />
          </div>
        </div>
        <div className="timer">{this.state.time}</div>
      </div>
    );
  }
}
