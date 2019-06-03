import React, { Component } from 'react';
import './BeerList.css';
import BeerListItem from "../BeerListItem/BeerListItem";

class BeerList extends Component {

  render() {
    const {items} = this.props;
    return (
      items.map((value, index) => {
          return <BeerListItem key={index} item={value}/>
        }
      ));
  }
}

export default BeerList;
