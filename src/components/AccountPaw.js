import React, { Component } from 'react';
import axios from 'axios';

class AccountPaw extends Component {
constructor(props) {
  super(props)
  this.state = {
    pawsReceived: [],
    pawsGiven: [],
    dog: null
  }
}

componentDidMount() {
  let self=this;
  let userIden = parseInt(sessionStorage.getItem('id'));
  fetch(`http://localhost:3001/api/dogs`)
  .then(function(results) {
    return results.json();
  })
  .then(function(data){
    function isUserDog(doggy) {
      return doggy.userId === userIden;
    }
    self.setState({
      dog: data.find(isUserDog),
    })
    console.log(self.state.dog)
  })
  .catch(function(error) {
    console.log(error)
  });


}

render() {
  return (
    <button className="accountPaw" onClick={this.handleClick}>
      {this.state.pawsReceived}
    </button>
  );
}
}
export default AccountPaw;
