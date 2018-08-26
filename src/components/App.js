/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import FuelSavingsPage from "./containers/FuelSavingsPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import Programacion from "./programacion/programacion";
import Podcast from "./podcast/podcast";
import Streaming from "./streaming/streaming";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
          {' | '}
          <NavLink to="/Programacion" activeStyle={activeStyle}>Programacion</NavLink>
          {' | '}
          <NavLink to="/Podcast" activeStyle={activeStyle}>Podcast</NavLink>
          {' | '}
          <NavLink to="/Streaming" activeStyle={activeStyle}>Streaming</NavLink>

        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/programacion" component={Programacion} />
          <Route path="/podcast" component={Podcast} />
          <Route path="/streaming" component={Streaming} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
