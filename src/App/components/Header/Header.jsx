import React from "react";
import { Link } from "react-router-dom";

//import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <h1 className="navbar-brand">BIT BLOGS</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link border-end border-dark lh-1 me-2"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/authors"
                className="nav-link border-end border-dark lh-1 me-2"
              >
                Authors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/posts/new-post"
                className="nav-link border-end border-dark lh-1 me-2"
              >
                New Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link lh-1">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
