import React, { Component } from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutContainer from "./containers/AboutContainer";
import BaseLayoutContainer from "./containers/BaseLayoutContainer";
import HomeContainer from "./containers/HomeContainer";
import PortfolioContainer from "./containers/PortfolioContainer";
import ContactsContainer from "./containers/ContactsContainer";
import ReferencesContainer from "./containers/ReferencesContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayoutContainer>
          <Switch>
            <Route path="/about" component={AboutContainer} />
            <Route path="/portfolio" component={PortfolioContainer} />
            <Route path="/contacts" component={ContactsContainer} />
            <Route path="/references" component={ReferencesContainer} />
            <Route exact path="/" component={HomeContainer} />
          </Switch>
        </BaseLayoutContainer>
      </BrowserRouter>
    );
  }
}

export default App;
