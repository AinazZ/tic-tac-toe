import React, { Component } from 'react';
import './surrender.css';

export default class Surrender extends Component {
  render() {
    return (
      <button
        className="btn surrender"
        onClick={() => this.props.onClick()}
        disabled={this.props.disabled}
      >
        SURRENDER
      </button>
    );
  }
}
