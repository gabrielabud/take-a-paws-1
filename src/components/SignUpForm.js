import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router'

export default class SignUpForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      city: "",
      postcode: "",
      status: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstname, lastname, email, username, password, city, postcode } = this.state;
    axios.post('http://localhost:3001/signup', { firstname, lastname, email, username, password, city, postcode })
      .then((response) => this.setState({ status: response.data.message}));
  }


render() {
  const { status } = this.state;
  if(status === "200") {
    return <Redirect to='/' />;
  }

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
        </label>
        <label>
          Last name:
          <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label><label>
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </label><label>
          Password:
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
        </label><label>
          City:
          <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
        </label><label>
          Postcode:
          <input type="text" name="postcode" value={this.state.postcode} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
