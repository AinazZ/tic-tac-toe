import React, { Component } from 'react';
import './timer.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.timer = null;

    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick(){
    this.setState({
      time: this.state.time + 1
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let time = this.state.time;

    return (
      <div className="timer">
        <span>{Math.floor(time/60/60)} : </span>
        <span>{Math.floor(time/60)} : </span>
        <span>{Math.floor(time%60)}</span>
      </div>
    );
  }
}
