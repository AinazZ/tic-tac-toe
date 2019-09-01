import React from 'react';
import './back.css';

export default function back(props) {
  return (
    <button
      className="btn back"
      onClick={props.onClick}
    >
      BACK
    </button>
  );
}
