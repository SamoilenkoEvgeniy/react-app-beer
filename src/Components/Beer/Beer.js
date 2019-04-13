import React, { Component } from 'react';
import './Beer.css';

class Beer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			beer: null,
			isLoaded: false,
			isLoading: false
		}
	}

	componentDidMount() {
		this.setState({isLoading: true});
		fetch('https://api.punkapi.com/v2/beers/' + this.props.match.params.id)
			.then(response => response.json())
			.then(data => {
				console.log(data[0]);
				this.setState({beer: data[0], isLoading: false, isLoaded: true});
			})
	}

	render() {
		const {isLoaded, isLoading, beer} = this.state;

		if (!beer && isLoading) {
			return (
				<div className="Beer-container">
					<div className="container-fluid">
						<div className="row">
							<h3>loading...</h3>
						</div>
					</div>
				</div>
			);
		}

		if (isLoaded) {
			return (
				<div className="Beer-container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-6 mx-auto">
								<div className="card text-center">
									<div className="card-header">{this.state.beer.name}</div>
									<div className="card-body">
										<img className="mx-auto d-block" src={this.state.beer.image_url}
										     alt={this.state.beer.name}/>
										<div className="card-title">
											{this.state.beer.tagline}
										</div>
										<div className="card-text">
											{this.state.beer.description}
										</div>
										<table className="table">
											<tbody>
											<tr>
												<th>First rewed</th>
												<td>{this.state.beer.first_brewed}</td>
											</tr>
											<tr>
												<th>PH</th>
												<td>{this.state.beer.ph}</td>
											</tr>
											<tr>
												<th>ABV</th>
												<td>{this.state.beer.abv}</td>
											</tr>
											<tr>
												<th>IBU</th>
												<td>{this.state.beer.ibu}</td>
											</tr>
											<tr>
												<th>SRM</th>
												<td>{this.state.beer.srm}</td>
											</tr>
											<tr>
												<th>EBC</th>
												<td>{this.state.beer.ebc}</td>
											</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}

		return '';
	}
}

export default Beer;
