import React, { Component } from 'react';

export default class Messenger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
        this.props.messages.map(message => (
          <div key={message.id}>
            {message.sender}
          </div>
        ))
       }
      </div>
    );
  }
};
