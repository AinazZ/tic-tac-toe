import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './game-item.css';

export default class GameItem extends Component{
  constructor(props) {
    super(props);

    this.state = {redirect: false};
    this.gameClicked = this.gameClicked.bind(this);
  }

  gameClicked() {
    this.setState({redirect: true});
  }

  render() {
    const { redirect } = this.state.redirect;

    if(redirect) {
      return <Redirect from='/' to='/game' />;
    }

    return(
      <div className="gameItem"
           onClick={this.gameClicked}
      >
        <div className="user1">
          {this.props.user1}
        </div>
        <div className="user2">
          {this.props.user2}
        </div>
        <div className="time">
          {this.props.time}
        </div>
      </div>
    );
  }
}
