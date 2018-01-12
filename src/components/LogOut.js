import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom'

export default class LogOut extends Component {

  killSession() {
    sessionStorage.setItem('id', 'null');
  }

  render() {
    return <NavLink to="/signin" exact activeClassName="active" onClick={this.killSession}>LogOut</NavLink>
  }
}
