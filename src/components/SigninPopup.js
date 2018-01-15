import React from 'react';
import '../css/Popup.css';
import SignInForm from './SignInForm';

export default class SigninPopup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <SignInForm updateNav={this.props.updateNav} />
          <a className='closeButton' onClick={this.props.closePopup}>X</a>
        </div>
      </div>
    );
  }
}
