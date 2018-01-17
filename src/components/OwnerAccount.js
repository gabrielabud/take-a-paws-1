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
    console.log(this.state.userData.description)
    return (
      <div>
      <p>{this.state.userData.firstname}</p>
      <p>{this.state.userData.lastname}</p>
      <p>{this.state.userData.username}</p>
      <p>{this.state.userData.email}</p>
      <p>{this.state.userData.description}</p>
      <img className="thumb" src={this.state.userData.image} />
      <button onClick={this.props.onClick}>Back to dog</button><br/>
      <nav>
      <NavLink to="/chat" exact activeClassName="active">Chattttttt</NavLink>
      </nav>
      </div>
    );
  }
}
export default UserAccount;
