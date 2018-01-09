import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Dog extends Component {
  render () {
    return (
        <div className="dog" >
          <div>
            <Link to={this.props.to}><img className="thumb" src={this.props.image} alt={this.props.name} /></Link>
          </div>
          <div>
            <div className="dogname">{this.props.name}</div>
          </div>
          <div>
            <div className="dogbreed">{this.props.breed}</div>
          </div>
          <div>
            <div className="dogdescription">{this.props.description}</div>
          </div>
        </div>
    );
  }
}
export default Dog;
