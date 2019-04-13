import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Header.css"

class Header extends Component {

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">Beer app</Link>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-item nav-link" to="/">Home</Link>
						<Link className="nav-item nav-link" to="/disclaimer">Disclaimer</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;