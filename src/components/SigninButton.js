import React from 'react';
import SigninPopup from './SigninPopup'

export default class SigninButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    }
  }

  updateNav() {
    this.props.logInClicked()
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
}

  render() {
  return (
    <li>
      <a className={this.props.className} onClick={this.togglePopup.bind(this)}>Signin</a>
      {this.state.showPopup ?
        <SigninPopup
          closePopup={this.togglePopup.bind(this)}
          updateNav={this.updateNav.bind(this)}
        />
        : null
      }
    </li>
  )
}
}
