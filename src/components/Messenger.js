import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
export default class Messenger extends Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    // sessionStorage.setItem('ownerId', arg);
    console.log()
  }

  render() {
    return (
      <div>

        {

        this.props.messages.map(senderId => (

          <button onClick={ev=> sessionStorage.setItem('ownerId', 5)} >
            <div key={senderId}>
              {senderId}
            </div>
          </button>

        ))
       }

      </div>
    );
  }
};
