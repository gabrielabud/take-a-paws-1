import React, { Component } from 'react';
import './App.css';
import DogList from './components/DogList.js'
import DogProfile from './components/DogProfile.js'
import SignUpForm from './components/SignUpForm.js'
import DogForm from './components/DogForm.js'
import SignInForm from './components/SignInForm.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
        console.log(results)
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
      <Router>
        <div className="App">
          <DogList dogsapi={this.state.dogsapi}/>
          <Route exact path="/dog/:dogId" component={DogProfile} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/dogform" component={DogForm} />
          <Route exact path="/signin" component={SignInForm} />
        </div>
      </Router>
    );
  }
}

export default App;
