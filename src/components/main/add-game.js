import React from 'react';
import './add-game.css';

export default function addGame(props) {
  return (
    <button
      className="addGame"
      onClick={props.onClick}
    >
      +
    </button>
  );
}
