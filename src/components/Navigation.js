import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom'
import LogOut from './LogOut';

class Navigation extends Component {

  render() {
    let id = sessionStorage.getItem('id');
    let listnav = null
    let logout = null
    let signin = this.props.signin
    if (id != 'null') {
      listnav = <NavLink to="/dogform" exact activeClassName="active">List your dog</NavLink>;
      logout = <LogOut />
    } else {
      signin = <NavLink to="/signin" exact activeClassName="active">Login</NavLink>;
    }
    return (
    <header>
      <nav>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        {listnav}
        {logout}
        {signin}
      </nav>
    </header>
    );
  }
}
export default Navigation;
