import React, { Component } from 'react';
import './game-board.css';
import Cell  from './cell';

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
    let {player1, player2, xIsNext} = this.props;

    let player1Class = USER_PLAYER;
    let player2Class = USER_PLAYER;
    if(xIsNext) {
      player1Class = USER_MOVE;
    }
    else {
      player2Class = USER_MOVE;
    }

    return (
      <div className="gameBoard container">
        <div className="players row">
          <div className={"player1 col " + player1Class}>
            {player1} X
          </div>
          <div className={"player2 col " + player2Class}>
            O {player2}
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
      </div>
    );
  }
}

const USER_PLAYER = "player";
const USER_MOVE   = "move";
