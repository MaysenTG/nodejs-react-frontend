import React, { Component } from "react";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: props.settings,
    };
  }

  render() {
    const data = this.state.settings;
    if (data) {
      return (
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{
            background: "linear-gradient(120deg,#7f70f5,#0ea0ff)",
            color: "#fff",
            padding: 20 + "px",
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Maysen Greenwood
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" id="/" href="/">
                    {data.home}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="/my-projects" href="/my-projects">
                    {data.projects}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="/cv" href="/cv">
                    {data.cv}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
}
