import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./BeerListItem.css";

class BeerListItem extends Component {

	render() {
		const {item} = this.props;
		return (
			<div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<div className="crop"><img src={item.image_url} alt={item.name}/></div>
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<p className="card-text">{item.description}</p>
						<Link to={'/beer/' + item.id}>Go to info</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default BeerListItem;
