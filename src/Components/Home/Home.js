import React, { Component } from 'react';
import './Home.css';
import BeerListItem from "../BeerListItem/BeerListItem";

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null,
			page: 1
		};

		this.loadMore = this.loadMore.bind(this);
	}

	componentDidMount() {
		this.fetchItems(this.state.page).then( data => {
			this.setState({data: data});
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.page !== this.state.page) {
			this.fetchItems(this.state.page).then( data => {
				this.setState( state => ({
					data: [...state.data, ...data]
				}));
			})
		}
	}

	fetchItems(page) {
		return fetch('https://api.punkapi.com/v2/beers?page=' + page)
			.then(response => response.json())
			.then(data => {
				let items = data.map(item => (
					<BeerListItem item={item}/>
				));
				return items;
			})
	}

	loadMore() {
		this.setState(state => ({
			page: state.page + 1
		}));
	}

	render() {
		return (
			<div className="Home-container container-fluid">
				<div className="row">
					{this.state.data}
				</div>
				<div className="row">
					<div className="col text-center mb-5">
						<button className="btn btn-primary" onClick={this.loadMore}>Load More</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;