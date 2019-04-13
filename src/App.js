import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Beer from './Components/Beer/Beer'
import Home from './Components/Home/Home'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Disclaimer from "./Components/Disclaimer/Disclaimer";

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
