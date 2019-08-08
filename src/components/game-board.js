import React, { Component } from 'react';

import './game-board.css';
import Cell from './cell';

export default class GameBoard extends Component {
  renderCell(i) {
    return (
      <Cell
        value={this.props.field[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="players row">
          <div className="user1 col">{this.props.user1} X</div>
          <div className="user2 col">{this.props.user2} O</div>
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
        <div className="timer">{this.props.time}</div>
      </div>
    );
  }
}
