import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarAltMarkup" aria-expanded='false' aria-label='Toggle navigation'>
      <span className="navbar-toggler-icon"/>
    </button>
    <Link to="/" className="navbar-brand">
      <img src="images/favicon.png" alt="Se mi profe logo" className="d-inline-block align-center" width="67px" height="52px" style={{marginRight: "2em"}}/>
      <h3 className="navbar title">Se mi profe</h3>
    </Link>
    <div className="collapse navbar-collapse" id="navbar">
      <div className="navbar-nav">
        <Link to="/search" className="btn btn-outline-secondary navbar-btn text-white nav-item nav-link">
          Profesores
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
