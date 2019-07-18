import React, { Component } from 'react';

import './game.css';

export default class Game extends Component{
  render() {
    let styles = {
      background: "#A9A9A9"
    };
    let step = this.props.step;
    let winner = this.props.step;

    if (winner) {
      styles.background = "#A9A9A9"
    }

    return(
      <div className="game" style={styles}>
        <div>
          {this.props.user1}
        </div>
        <div>
          {this.props.user2}
        </div>
        <div className="time">
          {this.props.time}
        </div>
      </div>
    );
  }
}
