import React, { Component } from 'react';

class About extends Component {
  componentDidMount() {
    this.props.settopbar(100);
  }
  render() {
    return (
      <div>
        <h1>Hello, I AM About</h1>
      </div>
    );
  }
}

export default About;
