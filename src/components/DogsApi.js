import React, { Component } from 'react';

export default class DogsApi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/dogs")
      .then(function(response) {
        console.log(response.data);
        return response.json();
      })
      .then(function(data){
        console.log(data)
        this.setState({
          dogs: data
        });
      })
      .catch(function() {
        console.log("Something was wrong")
      });
  }

  render() {
    return (
    this.state.dogs
  )


  }
}
