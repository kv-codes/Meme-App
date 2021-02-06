import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import history from './history';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (

    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Background"
            >
              Background
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Text"
            >
              Text
            </NavLink>
          </div>

          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/View"
            >
              View
            </NavLink>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;