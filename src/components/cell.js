import React, { Component } from 'react';

import './cell.css';

export default class Cell extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }*/

  render() {
    return (
      <button
        className="cell col"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.props.value}
      </button>
    );
  }
}
