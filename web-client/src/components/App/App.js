import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarAltMarkup" aria-expanded='false' aria-label='Toggle navigation'>
          <span className="navbar-toggler-icon"/>
        </button>
        <a href="/" className="navbar-brand">
          <img src="images/favicon.png" alt="Se mi profe logo" className="d-inline-block align-center" width="67px" height="52px" style={{marginRight: "2em"}}/>
          <h3 className="navbar title">Se mi profe</h3>
        </a>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav">
            <a href="/search" className="btn btn-outline-secondary navbar-btn text-white nav-item nav-link">
              Profesores
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default App;
