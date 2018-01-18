import React, { Component } from 'react';
import Navigation from './Navigation';
import '../css/Home.css'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div>
          <h1>Welcome to Paws world</h1>
        </div>
        <div className="home-bg"></div>
      </div>
    );
  }
}

export default Home;
