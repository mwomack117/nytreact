import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
              New York Times Article Search
            </a>
            <ul id="nav-mobile" className="right">
              <li>
                <a onClick={() => window.location.replace("/")}>Home</a>
              </li>
              <li>
                <NavLink to="/saved" style={{ "text-decoration": "none" }}>
                  Saved
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
