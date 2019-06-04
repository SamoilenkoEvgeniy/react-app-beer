import React, { Component } from 'react';
import { Link } from "react-router-dom";

import HeaderNavigationBar from "../../Components/HeaderNavigationBar/HeaderNavigationBar";
import BeersPagination from "../BeersPagination/BeersPagination";
import "./Header.css"

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/">Beer app</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <HeaderNavigationBar/>
          <BeersPagination/>
        </div>
      </nav>
    );
  }
}

export default Header;
