import React, { Component } from "react";
const styles = {
  linkStyle: {
    textDecoration: "none",

    fontSize: 25
  }
};

class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>Contact Info</h1>
        <a
          style={styles.linkStyle}
          href="https://www.youtube.com/watch?v=m1wAmFvuxQg"
        >
          Bluto Hightlight Reel
        </a>
        <h2>Phone: He'll call you.</h2>
      </div>
    );
  }
}

export default Contacts;
