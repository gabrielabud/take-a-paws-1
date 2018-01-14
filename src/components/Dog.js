import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Dog extends Component {
  render () {
    return (
        <div>
            <Link to={this.props.to} className="mask"><img src={this.props.image} alt={this.props.name} /></Link>
            <div className="dogname">{this.props.name}</div>
            <div className="dogbreed">{this.props.breed}</div>
            <div className="dogdescription">{this.props.description}</div>
        </div>
    );
  }
}
export default Dog;
