import React, { Component } from 'react';
import { connect } from "react-redux";
import * as beersActions from "../../Store/beer/actions";
import BeerVIew from "../../Components/BeerView/BeerVIew";
import Loading from "../../Components/Loading/Loading";

class Beer extends Component {

  componentDidMount() {
    this.props.dispatch(beersActions.fetchBeer(this.props.match.params.id));
  }

  render() {
    const {isLoading, beer} = this.props;

    if (!beer && isLoading) return (<Loading/>);

    if (beer) {
      return (
        <BeerVIew beer={beer}/>
      );
    }

    return '';
  }
}


const mapStateToProps = state => ({
  beer: state.beer.beer,
  isLoading: state.beers.isLoading,
});

export default connect(mapStateToProps)(Beer);
