import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div>
        <h1>bad {this.props.dept}</h1>
      </div>
    );
  }
}