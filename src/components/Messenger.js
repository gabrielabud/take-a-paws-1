import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Messenger extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ownerId: ""
    };
  }

  handleClick(arg) {
    sessionStorage.setItem('ownerId', arg)
  }

  render() {
    return (
      <div className="accountChats">
          {
          this.props.messages.map( (senderId , i) => (
            <NavLink to='/chat' onClick={(e) => this.handleClick(senderId, e)} exact className="chat">
              <div key={senderId}>
                {this.props.names[i]}
              </div>

              <button>Open</button>
            </NavLink>
          ))
         }
      </div>
    );
 }
};
