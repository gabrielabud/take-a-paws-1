import React, { Component } from 'react';

class Paw extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pawed: "paw"
    }
  }

  render() {
    return (
      <button className="paw" onClick={() => this.setState({pawed: 'pawed'})}>
        {this.state.pawed}
      </button>
    );
  }
}
export default Paw;
