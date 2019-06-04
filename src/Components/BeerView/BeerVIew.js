import React, { Component } from 'react';
import './BeerView.css';

class BeerVIew extends Component {

  render() {
    const {beer} = this.props;

    return (
      <div className="Beer-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 mx-auto">
              <div className="card text-center">
                <div className="card-header">{beer.name}</div>
                <div className="card-body">
                  <img className="mx-auto d-block" src={beer.image_url}
                       alt={beer.name}/>
                  <div className="card-title">
                    {beer.tagline}
                  </div>
                  <div className="card-text">
                    {beer.description}
                  </div>
                  <table className="table">
                    <tbody>
                    <tr>
                      <th>First rewed</th>
                      <td>{beer.first_brewed}</td>
                    </tr>
                    <tr>
                      <th>PH</th>
                      <td>{beer.ph}</td>
                    </tr>
                    <tr>
                      <th>ABV</th>
                      <td>{beer.abv}</td>
                    </tr>
                    <tr>
                      <th>IBU</th>
                      <td>{beer.ibu}</td>
                    </tr>
                    <tr>
                      <th>SRM</th>
                      <td>{beer.srm}</td>
                    </tr>
                    <tr>
                      <th>EBC</th>
                      <td>{beer.ebc}</td>
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
}

export default BeerVIew;
