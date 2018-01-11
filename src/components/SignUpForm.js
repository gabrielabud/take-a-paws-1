import React, { Component } from 'react';
import axios from 'axios';
import validator from 'validator';
import Input from 'react-validation/build/input';
import Form from 'react-validation/build/form';
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
      <Form onSubmit={this.handleSubmit}>
        <label>
          First name:
          <Input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} validations={[required]} />
        </label>
        <label>
          Last name:
          <Input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} validations={[required]} />
        </label>
        <label>
          Email:
          <Input type="text" name="email" value={this.state.email} onChange={this.handleChange} validations={[required, email]} />
        </label><label>
          Username:
          <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} validations={[required]}/>
        </label><label>
          Password:
          <Input type="text" name="password" value={this.state.password} onChange={this.handleChange} validations={[required]} />
        </label><label>
          City:
          <Input type="text" name="city" value={this.state.city} onChange={this.handleChange} validations={[required]} />
        </label><label>
          Postcode:
          <Input type="text" name="postcode" value={this.state.postcode} onChange={this.handleChange} validations={[required]} />
        </label>
        <Input type="submit" value="Submit" />
      </Form>
    );
  }
}
