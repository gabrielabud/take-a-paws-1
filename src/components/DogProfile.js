import React, { Component } from 'react';
import OwnerAccount from './OwnerAccount'
import Navigation from './Navigation'
class DogProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dogData: [],
      clicked: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    let self=this;
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

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    })
    sessionStorage.setItem('ownerId', this.state.dogData.userId);
  }

  render() {
    if(this.state.clicked) {
      return (
            <div>
              <Navigation />
              <p>{this.state.dogData.name}</p>
              <p>{this.state.dogData.breed}</p>
              <p>{this.state.dogData.description}</p>
              <div>
                <img className="thumb" src={this.state.dogData.image} alt={this.state.dogData.name} />
              </div>
              <button onClick={this.handleClick} >Check Owner</button>
            </div>
      );
    } else {
      return (
        <OwnerAccount onClick={this.handleClick}/>
      );
    }
  }
}

export default DogProfile;
