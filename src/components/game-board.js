import React, { Component } from 'react';

import './game-board.css';
import Cell from './cell';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(localStorage.getItem('game'));
  }

  handleClick(i) {
    const field = this.state.field.slice();
    field[i] = this.state.step ? 'X' : 'O';
    this.setState({field: field});
  }

  /*step() {
    if () {
      this.setState({ borderBottom: "2px solid" });
    }
  }*/

  renderCell(i) {
    return (
      <Cell
        value={this.state.field[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    let game = {
      game_id: 1,
      user1:   "Maks",
      user2:   "Kira",
      field:   [
                 'X', 'O', 'X',
                 'O', 'X', null,
                 'O', null, 'X'
      ],
      step:    "Maks",
      time:    "0:0:15",
      winner:  "Maks",

      borderBottom: ""
    }
    let json = JSON.stringify(game);
    localStorage.setItem('game', json);

    return (
      <div>
        <div className="players row">
          <div className="user1 col">{this.state.user1} X</div>
          <div className="user2 col">{this.state.user2} O</div>
        </div>
        <div className="field container">
          <div className="row">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
          </div>
          <div className="row">
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
          </div>
          <div className="row">
            {this.renderCell(6)}
            {this.renderCell(7)}
            {this.renderCell(8)}
          </div>
        </div>
        <div className="timer">{this.state.time}</div>
      </div>
    );
  }
}
