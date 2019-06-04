import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HeaderNavigationBar extends Component {

  render() {
    return (
      <div className="navbar-nav mr-auto">
        <Link className="nav-item nav-link" to="/">Home</Link>
        <Link className="nav-item nav-link" to="/disclaimer">Disclaimer</Link>
      </div>
    );
  }
}

export default HeaderNavigationBar;
