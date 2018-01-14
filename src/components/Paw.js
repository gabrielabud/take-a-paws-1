import React, { Component } from 'react';
import axios from 'axios';

class Paw extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pawed: "paw",
      status: null
    }
  this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let self=this;
    const userIden = sessionStorage.getItem('id');
    let dogIden =self.props.dogId;
    fetch(`http://localhost:3001/api/users/${userIden}/${dogIden}/requests`)
      .then(function(results) {
        console.log(results.body.status)
        return results.json();
      })
      .then(function(data){
          console.log("paws")
          console.log(data)
          if ( data.length > 0 ) {
            self.setState({
              pawed: 'pawed'
            })
          }

      })
      .catch(function(error) {
        console.log(error)
      });
  }

  handleClick() {
    let status = "pending";
    const userIden = sessionStorage.getItem('id');
    let dogIden =this.props.dogId;
    console.log(userIden);
    console.log(dogIden)
    axios.post(`http://localhost:3001/api/users/${userIden}/${dogIden}/requests`, { status, userIden, dogIden })
      .then((response) => this.setState({ status: response.data.message}));
    this.setState({
      pawed: 'pawed'
    });
    console.log(this.state.status)
  }

  render() {
    return (
      <button className="paw" onClick={this.handleClick}>
        {this.state.pawed}
      </button>
    );
  }
}
export default Paw;
