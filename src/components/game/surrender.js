import React from 'react';
import './surrender.css';

export default function surrender(props) {
  return (
    <button
      className="btn surrender"
      onClick={props.onClick}
    >
      SURRENDER
    </button>
  );
}
