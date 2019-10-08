import React from 'react';
import './timer.css';

export default function Timer(props) {
  return (
    <div className="timer">
      <span>{Math.floor(props.time/TIME_INTERVAL/TIME_INTERVAL)} : </span>
      <span>{Math.floor(props.time/TIME_INTERVAL)} : </span>
      <span>{Math.floor(props.time%TIME_INTERVAL)}</span>
    </div>
  );
}

const TIME_INTERVAL = 60;
