import React, { Component } from 'react';

class BeersPaginationControl extends Component {

  render() {
    const {label, clickHandler} = this.props;
    return (
      <span className="nav-item nav-link" onClick={clickHandler}>{label}</span>
    );
  }
}

export default BeersPaginationControl;
