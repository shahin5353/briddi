import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-section">
    <div className="text-center site-logo">
        <NavLink className="navbar-brand" to="/">| Briddi |</NavLink>
    </div>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mb-2 mb-lg-0 text-uppercase font-weight-bold mx-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/news"
                activeClassName="main-nav-active"
              >
                news
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/coronavirus"
                activeClassName="main-nav-active"
              >
                coronavirus
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/politics"
                activeClassName="main-nav-active"
              >
                politics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/elections"
                activeClassName="main-nav-active"
              >
                2020 elections
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/entertainment"
                activeClassName="main-nav-active"
              >
                entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/life"
                activeClassName="main-nav-active"
              >
                life
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/personal"
                activeClassName="main-nav-active"
              >
                personal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/video"
                activeClassName="main-nav-active"
              >
                video
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/shopping"
                activeClassName="main-nav-active"
              >
                shopping
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;
