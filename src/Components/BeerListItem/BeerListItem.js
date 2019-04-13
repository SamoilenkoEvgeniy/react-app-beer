import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./BeerListItem.css";

class BeerListItem extends Component {

	render() {
		return (
			<div key={this.props.item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<div className="crop"><img src={this.props.item.image_url} alt={this.props.item.name}/></div>
					<div className="card-body">
						<h5 className="card-title">{this.props.item.name}</h5>
						<p className="card-text">{this.props.item.description}</p>
						<Link to={'/beer/' + this.props.item.id}>Go to info</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default BeerListItem;
