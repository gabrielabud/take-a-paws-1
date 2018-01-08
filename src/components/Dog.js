import React, { Component } from 'react';

class Dog extends Component {
  render () {
    return (
        <div className="dog" >
          <div>
            <img className="thumb" src={this.props.image} alt={this.props.name} />

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
