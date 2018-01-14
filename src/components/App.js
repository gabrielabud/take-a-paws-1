import React, { Component } from 'react';
import '../App.css';
import DogList from './DogList';
import Navigation from './Navigation';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogsapi: []
    };

  }

  componentDidMount() {
    let self=this;
    fetch("http://localhost:3001/api/dogs")
      .then(function(results) {
        return results.json();
      })
      .then(function(data){
          self.setState({
            dogsapi: data
          })
      })
      .catch(function(error) {
        console.log(error)
      });
  }

  render() {
    return (
      <DogList dogsapi={this.state.dogsapi}/>
    );
  }
}

export default App;
