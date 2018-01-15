import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PawReceived extends Component {
  render () {
    return (
        <div className="pawreceived" >
            <div className="paw">
              received from user {this.props.userId} ->
              {this.props.status}
            </div>
        </div>
    );
  }
}
export default PawReceived;
