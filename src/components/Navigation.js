import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom'
import LogOut from './LogOut';
import SignupPopup from './SignupPopup'
import SignupButton from './SignupButton'
import SigninButton from './SigninButton'
import '../css/Navigation.css'

class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: sessionStorage.getItem('id'),
      listYourDog: null,
      profile: null,
      logOut: null,
      SignupPopup: null,
      SigninPopup: null,
      home: null
    }
    this.logOutClicked = this.logOutClicked.bind(this)
    this.logInClicked = this.logInClicked.bind(this)
  }

  logOutClicked() {
    //e.preventDefault()
    if(this)
    this.setState({
      id: sessionStorage.getItem('id'),
      SignupPopup: <SignupButton className="signupButton" />,
      SigninPopup: <SigninButton className="signinButton" />
    })
  }

  logInClicked() {
    this.setState({
      id: sessionStorage.getItem('id'),
      listYourDog: <li><NavLink className="listDogs" to="/dogform" exact activeClassName="active">List your dog</NavLink></li>,
      profile: <li><NavLink className="profile" to="/useraccount" exact activeClassName="active">Profile</NavLink></li>,
      home: <li><NavLink className="toHome" to="/" exact activeClassName="active">Home</NavLink></li>,
      logOut: <li><LogOut className="logOut" logOutClicked={this.logOutClicked} /></li>,
      SignupPopup: null,
      SigninPopup: null
    })
  }

  componentDidMount() {
    if (this.state.id != 'null') {
      this.setState({
        listYourDog: <li><NavLink className="listDogs" to="/dogform" exact activeClassName="active">List your dog</NavLink></li>,
        profile: <li><NavLink className="profile" to="/useraccount" exact activeClassName="active">Profile</NavLink></li>,
        home: <li><NavLink className="toHome" to="/" exact activeClassName="active">Home</NavLink></li>,
        logOut: <li><LogOut className="logOut" logOutClicked={this.logOutClicked} /></li>
      });
    } else {
      this.setState({
        SignupPopup: <SignupButton className="signupButton" logInClicked={this.logInClicked} />,
        SigninPopup: <SigninButton className="signinButton" logInClicked={this.logInClicked} />
      });
    }
  }

  render() {
    return (
      <nav className="navBar">
        <ul>
          {this.state.home}
          {this.state.listYourDog}
          {this.state.profile}
          {this.state.logOut}
          {this.state.SigninPopup}
          {this.state.SignupPopup}
        </ul>
      </nav>
    );
  }
}
export default Navigation;
