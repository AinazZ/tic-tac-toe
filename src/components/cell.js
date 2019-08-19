import React, { Component } from 'react';
import './cell.css';

export default class Cell extends Component {
  render() {
    return (
      <button
        className="cell col"
        onClick={() => this.props.onClick()}
        disabled={this.props.disabled}
      >
        {this.props.value}
      </button>
    );
  }
}
