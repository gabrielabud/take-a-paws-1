import React from 'react';
import UserPictureUpload from './UserPictureUpload';
import UserDescriptionUpdate from './UserDescriptionUpdate';
import Messenger from './Messenger'
import AccountPaw from './AccountPaw';
import '../css/UserAccount.css'

class UserAccount extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userData: [],
      namesData: [],
      namesNamesData:[]
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
          self.setState({
            userData: data
          })
      })
      .catch(function(error) {
        console.log(error)
      });

      fetch(`http://localhost:3001/api/messages/names?receiverId=${id}`)
        .then(function(results) {
          return results.json();
        })
        .then(function(data){
           const unique =[...new Set(data.map(item => item.sender))];
           const uniqueName = [...new Set(data.map(item => item.senderName))];
            self.setState({
              namesData: unique,
              namesNamesData: uniqueName
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

        <UserPictureUpload />
        <UserDescriptionUpdate />

        <h2>Chats</h2>
        <Messenger messages={this.state.namesData} names={this.state.namesNamesData}/>

        <h2>Paws</h2>
        <AccountPaw />
      </div>
    );
  }
}
export default UserAccount;
