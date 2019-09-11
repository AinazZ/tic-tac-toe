import React, { Component } from 'react';
import './game-item.css';

export default class GameItem extends Component{
  render() {
    let {status, user1, user2, time, winner} = this.props.game;

    let user1Class = USER_PLAYER;
    let user2Class = USER_PLAYER;
    if(status===STATUS_FINISHED) {
      if(user1===winner) {
        user1Class = USER_WINNER;
      }
      else {
        user2Class = USER_WINNER;
      }
    }
 
    return(
      <div
        className={"gameItem " + status}
        onClick={this.props.onClick}
      >
        <div className={"user1 " + user1Class}>
          {user1}
        </div>
        <div className={"user2 " + user2Class}>
          {user2}
        </div>
        <div className="time">
         <span>{Math.floor(time/60/60)} : </span>
         <span>{Math.floor(time/60)} : </span>
         <span>{Math.floor(time)}</span>
        </div>
      </div>
    );
  }
}

const STATUS_FINISHED = "finished";
const USER_PLAYER     = "player";
const USER_WINNER     = "winner";
