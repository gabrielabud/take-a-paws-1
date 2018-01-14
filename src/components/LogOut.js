import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom'

export default class LogOut extends Component {

  killSession() {
    sessionStorage.setItem('id', 'null');
  }

  render() {
    return <NavLink className={this.props.className} to="/home" exact activeClassName="active" onClick={this.killSession}>Logout</NavLink>
  }
}
