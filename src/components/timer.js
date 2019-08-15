import React, { Component } from 'react';

const INTERVAL = 100;

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {time: 0};
  }

  increment(){
      this.setState({time: this.state.time + 1});
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const value = this.state.time;

    return (
      <div>
        <span>{Math.round(value/INTERVAL/60/60)} : </span>
        <span>{Math.round(value/INTERVAL/60)} : </span>
        <span>{Math.round(value/INTERVAL)} . </span>
        <span>{value % INTERVAL}</span>
      </div>
    );
  }
}
