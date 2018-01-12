import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    const id = sessionStorage.getItem('id');
    let listnav =null
    if (id) {
      listnav = <NavLink to="/dogform" exact activeClassName="active">List your dog</NavLink>;
    } else {
      listnav = <NavLink to="/dogform" exact activeClassName="active"></NavLink>;
    }
    return (
    <header>
      <nav>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        {listnav}
      </nav>
    </header>
    );
  }
}
export default Navigation
