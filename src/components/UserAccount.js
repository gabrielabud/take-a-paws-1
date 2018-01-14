import React from 'react';
import UserPictureUpload from './UserPictureUpload';

class UserAccount extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userData: []
    }
  }

  componentDidMount() {
    let self=this;
    const id = sessionStorage.getItem('id');

    fetch(`http://localhost:3001/users/${id}`)
      .then(function(results) {
        return results.json();
      })
      .then(function(data){
          console.log(data)
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
      <div>
        <UserPictureUpload />
        <p>{this.state.userData.firstname}</p>
        <p>{this.state.userData.lastname}</p>
        <p>{this.state.userData.username}</p>
        <p>{this.state.userData.email}</p>
        <img className="thumb" src={this.state.userData.image} />
      </div>
    );
  }
}
export default UserAccount;
