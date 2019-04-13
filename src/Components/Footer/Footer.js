import React, { Component } from 'react';
import "./Footer.css"

class Footer extends Component {

	render() {
		return (
			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="col text-center">
							&#9400; <a rel="nofollow" target="_blank" href="https://github.com/SamoilenkoEvgeniy">Samoilenko Evgeny</a>
						</div>
						<div className="col text-center">
							With helps <a target="_blank" rel="nofollow" href="https://punkapi.com/">Punk Api</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;