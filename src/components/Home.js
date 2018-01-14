import React, { Component } from 'react';
import Navigation from './Navigation';
import '../css/Home.css'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <Navigation />
      </div>
    );
  }
}

export default Home;
