import React, { Component } from 'react';

class DogForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      breed: '',
      description: '',
      image: ''
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

  }
  render() {
    return (
      <form>
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
