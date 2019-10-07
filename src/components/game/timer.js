import React from 'react';
import './timer.css';

export default function Timer(props) {
  return (
    <div className="timer">
      <span>{Math.floor(props.time/60/60)} : </span>
      <span>{Math.floor(props.time/60)} : </span>
      <span>{Math.floor(props.time%60)}</span>
    </div>
  );
}
