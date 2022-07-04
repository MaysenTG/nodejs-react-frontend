import React, { Component } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";

import Nav from "./Nav";
import Homepage from "./Homepage";
import Footer from "./Footer";
import MyProjects from "./MyProjects";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default class MainRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: null,
    };
  }

  async componentDidMount() {
    const settings = await fetch("https://nodejs-api-personal-portfolio.herokuapp.com/api/v1/settings");
    const body = await settings.json();

    this.setState({ settings: body });
    console.log(body);
  }

  render() {
    const data = this.state.settings;
    if (data) {
      return (
        <Router>
          <Nav settings={data.navigation} />

          <Routes>
            <Route
              exact
              path="/"
              element={<Homepage settings={data.homepage} />}
            />

            <Route exact path="/my-projects" element={<MyProjects />} />

            <Route path="*" element={<Navigate from="*" to="/" />} />
          </Routes>

          <Footer />
        </Router>
      );
    }
  }
}
