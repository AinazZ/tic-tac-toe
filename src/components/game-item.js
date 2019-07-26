import React, { Component } from 'react';

import './game-item.css';

export default class GameItem extends Component{
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
      <div className="gameItem" style={styles}>
        <div className="user1">
          {this.props.user1}
        </div>
        <div className="user2">
          {this.props.user2}
        </div>
        <div className="time">
          {this.props.time}
        </div>
      </div>
    );
  }
}
