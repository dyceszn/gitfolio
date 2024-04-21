import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">gitfolio</Link>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/error">Repositories</Link>
          <Link to="/error">About</Link>
          <Link to="/error">
            <span>Still in progress</span>
          </Link>
        </nav>
      </div>
      <hr />
    </>
  );
};

export default Header;
