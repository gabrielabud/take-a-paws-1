import React from 'react';
import UserPictureUpload from './UserPictureUpload';
import UserDescriptionUpdate from './UserDescriptionUpdate';
import Messenger from './Messenger'
import AccountPaw from './AccountPaw';

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
      <div classame="useraccount">
      <p>
        <span className="userfirstname">{this.state.userData.firstname} </span>
        <span className="userlastname">{this.state.userData.lastname}       </span>
        <span className="userlastname"> {this.state.userData.email}</span>
      </p>
      <img className="thumb" src={this.state.userData.image} />
      <UserPictureUpload />
      <UserDescriptionUpdate/>
      <p>{this.state.userData.description}</p>
      <Messenger messages={this.state.namesData} names={this.state.namesNamesData}/>
      <AccountPaw />
      </div>
    );
  }
}
export default UserAccount;
