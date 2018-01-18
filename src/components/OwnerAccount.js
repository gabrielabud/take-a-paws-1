import React from 'react';
import { NavLink } from 'react-router-dom'
import Chat from './Chat'

class UserAccount extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userData: [],
    }
  }

  componentDidMount() {
    let self=this;
    const id = sessionStorage.getItem('ownerId');
    fetch(`http://localhost:3001/users/${id}`)
      .then(function(results) {
        return results.json();
      })
      .then(function(data){
          self.setState({
            userData: data
          })
          console.log(this.state.userData)
      })
      .catch(function(error) {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="userAccount ownerAccount">
        <header>
          <h1>{this.state.userData.firstname} {this.state.userData.lastname}</h1>
          <div className="userEmail">{this.state.userData.email}</div>
          <div className="userDescription">{this.state.userData.description}</div>
        </header>

        <img className="userImage" src={this.state.userData.image} />
        <nav className="buttons">
          <button onClick={this.props.onClick}>Back to dog</button><br/>
          <NavLink to="/chat" exact className="button">Start chat</NavLink>
        </nav>
      </div>
    );
  }
}
export default UserAccount;
