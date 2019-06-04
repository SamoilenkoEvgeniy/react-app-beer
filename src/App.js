import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from './Containers/Home/Home'
import Header from "./Containers/Header/Header";
import Footer from "./Components/Footer/Footer";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import Beer from "./Containers/Beer/Beer";

class App extends Component {

	render() {
		return (
			<Router>
				<div className="wrapper">
					<Header/>
					<Route exact path="/" component={Home}/>
					<Route exact path="/disclaimer" component={Disclaimer}/>
					<Route path="/beer/:id" component={Beer}/>
				</div>
				<Footer />
			</Router>
		);
	}
}

export default App;
