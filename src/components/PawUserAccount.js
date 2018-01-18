import React from 'react';
import { NavLink } from 'react-router-dom'
import Chat from './Chat'

class PawUserAccount extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userData: [],
    }
  }

  componentDidMount() {
    let self=this;
    const id = self.props.match.params.userId
    console.log(id)
    fetch(`http://localhost:3001/users/${id}`)
      .then(function(results) {
        return results.json();
      })
      .then(function(data){
          self.setState({
            userData: data
          })
      })
      .catch(function(error) {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="userAccount">
        <header>
          <h1>{this.state.userData.firstname} {this.state.userData.lastname}</h1>
          <div className="userEmail">{this.state.userData.email}</div>
          <div className="userDescription">{this.state.userData.description}</div>
        </header>

        <img className="userImage" src={this.state.userData.image} alt="" />
      </div>
    );
  }
}
export default PawUserAccount;
