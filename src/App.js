import React, { Component } from 'react';
import './App.css';
import Dog from './components/Dog.js'
import DogList from './components/DogList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DogList/>
      </div>
    );
  }
}

export default App;
