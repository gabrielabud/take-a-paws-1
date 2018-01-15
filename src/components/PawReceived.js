import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class PawReceived extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: "accept",
    }
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick() {
    console.log(this.state.response);
    console.log(this.props.statusPaw);
    console.log(this.props.id);
    let status = "";
    let userId = null;
    let dogId = null;

    if (this.state.response === "accept" ) {
      status = "accepted";
      userId = this.props.userId;
      dogId = this.props.dogId;
      axios.put(`http://localhost:3001/api/requests/${this.props.id}`, { status })
      .then((response) => {
        this.setState({ response: "reject" });
          console.log(this.props.statusPaw);
      });
    } else if ( this.state.response === "reject" ) {
      status = "rejected"
      axios.put(`http://localhost:3001/api/requests/${this.props.id}`, { status })
      .then((response) => {
        console.log(this.props.statusPaw);
        this.setState({ response: "accept" })
      });
    }
  }

  render () {
    return (
        <div className="pawreceived" >
            <div className="paw">
              received from user {this.props.userId} ->
              {this.props.statusPaw}
              <button className="paw" onClick={this.handleClick}>
                {this.state.response}
              </button>
            </div>
        </div>
    );
  }
}
export default PawReceived;
