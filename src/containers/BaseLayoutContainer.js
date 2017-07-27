import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const styles = {
  headerContainer: {
    padding: 20,
    backgroundColor: "pink"
  },
  ButtonStyle: {
    marginRight: 10,
    height: 35
  },
  HeaderLinkStyle: {
    padding: 10,
    color: "blue",
    fontSize: 20,
    textDecoration: "none"
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
      <div style={styles.headerContainer}>
        <header>
          <button style={styles.ButtonStyle}>
            <NavLink
              activeStyle={{ color: "goldenrod" }}
              style={styles.HeaderLinkStyle}
              exact
              to="/"
            >
              HOME
            </NavLink>
          </button>
          <button style={styles.ButtonStyle}>
            <NavLink
              activeStyle={{ color: "goldenrod" }}
              style={styles.HeaderLinkStyle}
              exact
              to="/about"
            >
              ABOUT
            </NavLink>
          </button>
          <button style={styles.ButtonStyle}>
            <NavLink
              activeStyle={{ color: "goldenrod" }}
              style={styles.HeaderLinkStyle}
              to="/portfolio"
            >
              PORTFOLIO
            </NavLink>
          </button>
          <button style={styles.ButtonStyle}>
            <NavLink
              activeStyle={{ color: "goldenrod" }}
              style={styles.HeaderLinkStyle}
              to="/contacts"
            >
              CONTACT
            </NavLink>
          </button>
          <button style={styles.ButtonStyle}>
            <NavLink
              activeStyle={{ color: "goldenrod" }}
              style={styles.HeaderLinkStyle}
              to="/references"
            >
              REFERENCES
            </NavLink>
          </button>
        </header>
        {this.props.children}
        <footer>
          <button style={styles.ButtonStyle}>
            <NavLink
              activeStyle={{ color: "goldenrod" }}
              style={styles.FooterLinkStyle}
              exact
              to="/"
            >
              HOME
            </NavLink>
          </button>
          <button style={styles.ButtonStyle}>
            <NavLink
              activeStyle={{ color: "goldenrod" }}
              style={styles.FooterLinkStyle}
              to="/about"
            >
              ABOUT
            </NavLink>
          </button>
          <button style={styles.ButtonStyle}>
            <NavLink
              activeStyle={{ color: "goldenrod" }}
              style={styles.FooterLinkStyle}
              to="/portfolio"
            >
              PORTFOLIO
            </NavLink>
          </button>
          <button style={styles.ButtonStyle}>
            <NavLink
              activeStyle={{ color: "goldenrod" }}
              style={styles.FooterLinkStyle}
              to="/contacts"
            >
              CONTACT
            </NavLink>
          </button>
          <button style={styles.ButtonStyle}>
            <NavLink
              activeStyle={{ color: "goldenrod" }}
              style={styles.FooterLinkStyle}
              to="/references"
            >
              REFERENCES
            </NavLink>
          </button>
        </footer>
      </div>
    );
  }
}

export default BaseLayoutContainer;
