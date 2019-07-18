import React, { Component } from 'react';

import './game.css';

export default class Game extends Component{
  render() {
    return(
      <div className="game">
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
