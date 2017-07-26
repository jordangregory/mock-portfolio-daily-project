import React, { Component } from "react";
const styles = {
  aboutPage: {
    backgroundColor: "green",
    color: "pink",
    border: "solid goldenrod 5px",
    textAlign: "center"
  },
  paragraphDiv: {
    textAlign: "center"
  },
  paragraphContainer: {
    border: "solid goldenrod 2px",
    padding: 20,
    width: "50%",
    color: "pink",
    textAlign: "center"
  },
  bio: {
    textWarap: "wrap"
  }
};

class AboutContainer extends Component {
  render() {
    return (
      <div style={styles.aboutPage}>
        <h1>About Me...and my dad Bluto...</h1>
        <div style={styles.paragraphDiv}>
          <p style={styles.paragraphContainer}>
            "Being that I'm the son of the famous actor Bluto(from Popeye), it's
            been a pretty smooth ride for me growing up. I hail from Mobile,
            Alabama, where I grew up growing a beard. If you haven't seen my
            beard, it's awesome-pants. I also coined the catchphrse "(insert
            something here)" followed by "pants." I currently own a bunch of
            t-shirts I couldn't sell."
          </p>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
