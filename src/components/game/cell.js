import React from 'react';
import './cell.css';

export default function cell(props) {
  return (
    <button
      className="cell col"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
