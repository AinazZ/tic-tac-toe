import React, { Component } from 'react';
import './game-item.css';

export default class GameItem extends Component{
  render() {
    return(
      <div className="gameItem"
           onClick={() => this.props.onClick()}
      >
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
