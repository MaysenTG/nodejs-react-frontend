import { React, useState } from "react";
import { Link } from "react-router-dom";

const dropdownLinkStyle = {
  maxWidth: "92%",
};

const buttonToDropdown = {
  all: "unset",
  fontSize: "18px",
  cursor: "pointer",
  margin: "0px 10px",
  hover: {
    color: "#0a58ca",
  },
};

function Footer() {
  const [hover, setHover] = useState(false);

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2022 Maysen Greenwood</p>
        <ul className="nav col-md-4 justify-content-center">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/projects" className="nav-link px-2 text-muted">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="nofollow" href="/users/sign_in">
              Sign in
            </a>
          </li>
        </ul>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-muted"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/MaysenTG"
            >
              <img
                width="40"
                src="https://ik.imagekit.io/maysentg/tr:f-png/icons8-github-256.png"
                alt="github logo"
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/maysen-greenwood/"
            >
              <img
                width="40"
                src="https://ik.imagekit.io/maysentg/tr:f-png/icons8-linkedin-circled-240.png"
                alt="linkedin logo"
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/maysen.greenwood"
            >
              <img
                width="40"
                src="https://ik.imagekit.io/maysentg/tr:f-png/icons8-facebook-240.png"
                alt="facebook logo"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
