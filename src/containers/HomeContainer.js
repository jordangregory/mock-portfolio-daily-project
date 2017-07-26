import React, { Component } from "react";
const styles = {
  homePage: {
    padding: 50,
    backgroundColor: "green",
    textAlign: "center",
    color: "pink",
    border: "solid goldenrod 5px",
    textAlign: "center"
  },
  keeganPic: {
    height: 500,
    width: 500,
    transform: "rotate(90deg)",
    borderRadius: "50%",
    border: "solid goldenrod 5px"
  },
  BlutoPic: {
    height: 500,
    width: 500
  }
};

class HomeContainer extends Component {
  render() {
    return (
      <div style={styles.homePage}>
        <p>My name is Keegan, and this is my portfolio...about my dad Bluto!</p>
        <div>
          <img src="/pic.jpg" style={styles.keeganPic} alt="keegan" />
          <img src="/Mr_Bluto.png" style={styles.BlutoPic} alt="Bluto" />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
