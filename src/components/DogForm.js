import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class DogForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      breed: '',
      description: '',
      image: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {name, breed, description, image} = this.state;
    console.log({name, breed, description, image});
    axios.post('http://localhost:3001/api/users/1/dogs', {name, breed, description, image})
    .then(() => this.setState({ redirect: true }));
  }

  render() {
    const redirect = this.state.redirect;
    if(redirect) {
      return <Redirect to='/' />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Breed:
          <input type="text" name="breed" value={this.state.breed} onChange={this.handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <label>
          Image upload:
          <input type="file" name="image" value={this.state.image} onChange={this.handleChange} />
        </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }
}
export default DogForm;
