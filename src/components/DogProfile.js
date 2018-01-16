import React, { Component } from 'react';
import Paw from './Paw';
import dogProfile from '../css/DogProfile.css'

class DogProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dogData: []
    }
  }

  componentDidMount() {
    let self = this;
    const id = self.props.match.params.dogId
    fetch(`http://localhost:3001/api/dogs/${id}`)
      .then(function(results) {
        return results.json();
      })
      .then(function(data){
          self.setState({
            dogData: data
          })
      })
      .catch(function(error) {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="dog-profile" key={this.state.dogData.id}>
        <h1>{this.state.dogData.name}</h1>
        <div className="profile-pic">
          <img src={this.state.dogData.image} alt={this.state.dogData.name} />
        </div>
        <p>{this.state.dogData.breed}</p>
        <p>{this.state.dogData.description}</p>
      </div>
    );
  }
}
export default DogProfile;
