import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom'
import LogOut from './LogOut';
import SignupPopup from './SignupPopup'
import SignupButton from './SignupButton'
import SigninButton from './SigninButton'
import '../css/Navigation.css'

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: sessionStorage.getItem('id'),
      listYourDog: null,
      profile: null,
      logOut: null,
      SignupPopup: null,
      SigninPopup: null,
      home: null
    }
  }

  componentDidMount() {
    if (this.state.id != 'null') {
      this.setState({
        listYourDog: <NavLink className="listDogs" to="/dogform" exact activeClassName="active">List your dog</NavLink>,
        profile: <NavLink className="profile" to="/useraccount" exact activeClassName="active">Profile</NavLink>,
        home: <NavLink className="toHome" to="/" exact activeClassName="active">Home</NavLink>,
        logOut: <LogOut className="logOut" />
      });
    } else {
      this.setState({
        SignupPopup: <SignupButton className="signupButton" />,
        SigninPopup: <SigninButton className="signinButton" />
      });
    }
  }

  render() {
    return (
      <nav className="navBar">
        <NavLink className="about" to="/home" exact activeClassName="active">About</NavLink>
        {this.state.listYourDog}
        {this.state.profile}
        {this.state.logOut}
        {this.state.home}
        {this.state.SigninPopup}
        {this.state.SignupPopup}
      </nav>
    );
  }
}
export default Navigation;
