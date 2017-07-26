import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <div>
        <h1>Did this work?</h1>
        {this.props.children}
      </div>
    );
  }
}
