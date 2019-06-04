import React, { Component } from 'react';
import { connect } from "react-redux";

import * as beersActions from '../../Store/beers/actions';
import BeerList from "../../Components/BeerList/BeerList";
import Loading from "../../Components/Loading/Loading";
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.loadMore = this.loadMore.bind(this);
    this.state = {
      page: this.props.page
    };
  }

  componentDidMount() {
    this.setState((state, props) => (
      {page: state.page + 1}
    ));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.dispatch(beersActions.fetchBeers(this.state.page));
      window.scrollTo(0, 0);
    }
  }

  loadMore() {
    this.setState((state, props) => (
      {page: state.page + 1}
    ));
    this.props.dispatch(beersActions.pageChange());
  }

  render() {
    if (!this.props.beers.length || this.props.isLoading) return (<Loading/>);
    return (
      <div className="Home-container container-fluid">
        <div className="row">
          <BeerList items={this.props.beers}/>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={this.loadMore} className={'btn btn-primary'}>Load more</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers.beers,
  isLoading: state.beers.isLoading,
  page: state.beers.page,
});

export default connect(mapStateToProps)(Home);
