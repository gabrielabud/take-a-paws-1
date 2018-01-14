import React, { Component } from 'react';
import axios from 'axios';
import validator from 'validator';
import Input from 'react-validation/build/input';
import Form from 'react-validation/build/form';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import SigninPopup from './SigninPopup';
import '../css/SignUpForm.css';

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
      type: "",
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
    const { firstname, lastname, email, username, password, city, postcode, type } = this.state;
    axios.post('http://localhost:3001/signup', { firstname, lastname, email, username, password, city, postcode, type })
      .then((response) => this.setState({ status: response.data.message}));
  }

  render() {

    const { status } = this.state;
    if(status === "200") {
      return <SigninPopup />;
    }

    const required = (value) => {
      if (!value.toString().trim().length) {
        return 'required field';
      }
    };

    const email = (value) => {
      if (!validator.isEmail(value)) {
        return `${value} is not a valid email.`
      }
    };

    return (
      <div className="content">
      <h1 className="title">Take a paws</h1>
      <h5 className="description">Sign up to see some cool dogs.</h5>
        <Form onSubmit={this.handleSubmit}>
          <div className="input">
            <Input className="SignupInput" name="firstname" placeholder="First name" value={this.state.firstname} onChange={this.handleChange} validations={[required]} /><br/>
            <Input className="SignupInput" name="lastname" placeholder="Last name" value={this.state.lastname} onChange={this.handleChange} validations={[required]} /><br/>
            <Input className="SignupInput" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} validations={[required, email]} /><br/>
            <Input className="SignupInput" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} validations={[required]}/><br/>
            <Input className="SignupInput" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} validations={[required]} /><br/>
            <Input className="SignupInput" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange} validations={[required]} /><br/>
            <Input className="SignupInput" name="postcode" placeholder="Postcode" value={this.state.postcode} onChange={this.handleChange} validations={[required]} /><br/>
            <Input className="SignupInput" name="type" placeholder="Type" value={this.state.type} onChange={this.handleChange} validations={[required]} /><br/>
          </div>
          <button className="SignupButton" type="submit" value="Submit" id="createUser">Sign up</button>
        </Form>
      </div>
    );
  }
}
