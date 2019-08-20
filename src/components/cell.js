import React from 'react';
import './cell.css';

export default function Cell(props) {
  return (
    <button
      className="cell col"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}
