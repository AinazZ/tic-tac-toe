import React, { Component } from 'react';
import './game-item.css';

export default class GameItem extends Component{
  render() {
    let {status, user1, user2, time, winner} = this.props;

    let user1Class = "player";
    let user2Class = "player";
    if(status==="finished") {
      if(user1===winner) {
        user1Class = "winner";
      }
      else {
        user2Class = "winner";
      }
    }

    return(
      <div
        className={"gameItem " + status}
        onClick={() => this.props.onClick()}
      >
        <div className={"user1 " + user1Class}>
          {user1}
        </div>
        <div className={"user2 " + user2Class}>
          {user2}
        </div>
        <div className="time">
          {time}
        </div>
      </div>
    );
  }
}
