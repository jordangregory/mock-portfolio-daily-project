import React, { Component } from "react";

const styles = {
  blutoImages: {
    height: 500,
    width: 500,
    margin: 2,
    border: "solid goldenrod 5px"
  },
  verbiage: {
    textAlign: "center"
  }
};

class PorfolioContainer extends Component {
  render() {
    return (
      <div>
        <p style={styles.verbiage}>
          This are various drawing I've done of my dad, Bluto!
        </p>
        <img
          src="/blutoPortrait1.jpg"
          style={styles.blutoImages}
          alt="bluto1"
        />
        <img
          src="/blutoPortrait2.jpg"
          style={styles.blutoImages}
          alt="bluto2"
        />
        <img
          src="/blutoPortrait3.jpg"
          style={styles.blutoImages}
          alt="bluto3"
        />
        <img
          src="/blutoPortrait4.png"
          style={styles.blutoImages}
          alt="bluto4"
        />
      </div>
    );
  }
}

export default PorfolioContainer;
