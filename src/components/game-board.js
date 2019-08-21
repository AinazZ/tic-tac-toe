import React, { Component } from 'react';
import './game-board.css';
import Cell  from './cell';
import Timer from './timer';

export default class GameBoard extends Component {
  renderCell(i) {
    return (
      <Cell
        value={this.props.field[i]}
        disabled={this.props.disabled}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="gameBoard container">
        <div className="players row">
          <div className="player1 col">
            {this.props.player1} X
          </div>
          <div className="player2 col">
            O {this.props.player2}
          </div>
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
        <Timer time={this.props.time} />
      </div>
    );
  }
}
