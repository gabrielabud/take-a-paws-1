import React, { Component } from 'react';
import { DOGS } from './App';

class DogProfile extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.dogId}
      </div>
    );
  }
}

export default DogProfile;
