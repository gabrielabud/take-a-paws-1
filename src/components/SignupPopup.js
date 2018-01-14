import React from 'react';
import '../css/Popup.css';
import SignUpForm from './SignUpForm';

export default class SignupPopup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <SignUpForm />
          <button className='closeButton' onClick={this.props.closePopup}>X</button>
        </div>
      </div>
    );
  }
}
