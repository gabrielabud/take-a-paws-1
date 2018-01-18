import React, { Component } from 'react';
import Paw from './Paw';
import dogProfile from '../css/DogProfile.css'
import OwnerAccount from './OwnerAccount'
import Navigation from './Navigation'

class DogProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dogData: [],
      clicked: true,
      requestStatus: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    let self = this;
    const userId = sessionStorage.getItem('id');
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
console.log(self.state.requestStatus)
      fetch(`http://localhost:3001/api/users/${userId}/${id}/requests`)
        .then(function(results) {
          return results.json();
        })
        .then(function(data){
          self.setState({
            requestStatus: data[0].status
          })
            console.log(self.state.requestStatus)
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

  handleChange() {
    const status =this.state.requestStatus ;
    if (status === '') {
   this.setState({ requestStatus: null});
    }
    else {
      this.setState({ requestStatus: ''});
    }
 }

  render() {
    const status =this.state.requestStatus ;
    var chatOptions ;
    if(status === ''){
     chatOptions = <p>Send Paw request to be able to chat!</p>
    }
    else if(status === 'accepted'){
      chatOptions = <button onClick={this.handleClick}>Check Owner</button>
    }
    else{
      chatOptions = <p className="waiting">Paw response pending!</p>
    }

    if(this.state.clicked) {
      return (
       <div className="userAccount dogProfile">
         <header>
           <h1>{this.state.dogData.name}</h1>
           <div className="userEmail">{this.state.dogData.breed}</div>
           <div className="userDescription">{this.state.dogData.description}</div>
         </header>


         <img className="userImage" src={this.state.dogData.image} alt={this.state.dogData.name} />
          <button onClick={this.handleChange}><Paw dogId={this.props.match.params.dogId}/></button>
         <nav class="buttons">
           {chatOptions}
           <Paw dogId={this.props.match.params.dogId} />
         </nav>
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
