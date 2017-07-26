import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
  ButtonStyle: {
    marginRight: 10,
    height: 35
  },
  HeaderLinkStyle: {
    padding: 10,
    color: "blue",
    textDecoration: "none",
    fontSize: 20
  },
  FooterLinkStyle: {
    padding: 10,
    color: "red",
    textDecoration: "none",
    fontSize: 10,
    Position: 0
  }
};

class BaseLayoutContainer extends Component {
  render() {
    return (
      <div>
        <header>
          <button style={styles.ButtonStyle}>
            <Link style={styles.HeaderLinkStyle} to="/">
              HOME
            </Link>
          </button>
          <button style={styles.ButtonStyle}>
            <Link style={styles.HeaderLinkStyle} to="/about">
              ABOUT
            </Link>
          </button>
          <button style={styles.ButtonStyle}>
            <Link style={styles.HeaderLinkStyle} to="/portfolio">
              PORTFOLIO
            </Link>
          </button>
        </header>
        {this.props.children}
        <footer>
          <button style={styles.ButtonStyle}>
            <Link style={styles.FooterLinkStyle} to="/">
              HOME
            </Link>
          </button>
          <button style={styles.ButtonStyle}>
            <Link style={styles.FooterLinkStyle} to="/about">
              ABOUT
            </Link>
          </button>
          <button style={styles.ButtonStyle}>
            <Link style={styles.FooterLinkStyle} to="/portfolio">
              PORTFOLIO
            </Link>
          </button>
        </footer>
      </div>
    );
  }
}

export default BaseLayoutContainer;