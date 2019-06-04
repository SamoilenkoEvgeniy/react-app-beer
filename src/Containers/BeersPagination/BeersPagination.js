import React, { Component } from 'react';
import { connect } from "react-redux";

import BeersPaginationControl from "../../Components/BeersPaginationControl/BeersPaginationControl";
import * as beersActions from "../../Store/beers/actions";
import './BeersPagination.css';

class BeersPagination extends Component {

  constructor(props) {
    super(props);

    this.pageChange = this.pageChange.bind(this);
  }

  pageChange(page = 1) {
    this.props.dispatch(beersActions.pageChange(page));
  }

  render() {
    return (
      <div className="navbar-nav">
        {this.props.page > 1 &&
        <BeersPaginationControl label="First page" clickHandler={() => this.pageChange(1)}/>
        }
        {this.props.page > 1 &&
        <BeersPaginationControl label="&lt;&lt;" clickHandler={() => this.pageChange(this.props.page - 1)}/>
        }
        <span className="nav-item nav-link">Current Page {this.props.page}</span>
        <BeersPaginationControl label="&gt;&gt;" clickHandler={() => this.pageChange(this.props.page + 1)}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.beers.page,
});

export default connect(mapStateToProps)(BeersPagination);
