import React, { Component } from "react";
const styles = {
  homePage: {
    padding: 50
  },
  keeganPic: {
    height: 500,
    width: 500,
    transform: "rotate(90deg)"
  }
};

class HomeContainer extends Component {
  render() {
    return (
      <div style={styles.homePage}>
        <h1>HOME</h1>
        <p>My name is Keegan, and this is my portfolio.</p>
        <img src="/pic.jpg" style={styles.keeganPic} alt="keegan" />
      </div>
    );
  }
}

export default HomeContainer;
