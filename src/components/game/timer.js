import React, { Component } from 'react';
import './timer.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.props.time
    };
  }

  render() {
    let time = this.state.time;

    return (
      <div className="timer">
        <span>{Math.floor(time/1000/60/60)} : </span>
        <span>{Math.floor(time/1000/60)} : </span>
        <span>{Math.floor(time/1000)}</span>
      </div>
    );
  }
}
