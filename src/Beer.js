import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      testVar: 'Test!'
    }
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers?page=1')
        .then(response => response.json())
        .then(data => {
          let items = data.map(item => {
            return (
                <div className="col-3">
                  <div className="card">
                    <div className="crop"><img src={item.image_url} alt={item.name}/></div>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <Route path="/users/:userId" component={UserInfo} />
                    </div>
                  </div>
                </div>
            );
          });
          this.setState({data: items});
        })
  }

  render() {
    return (
        <div className="App-container">
          <div className="container">
            <div className="row">
              {this.state.data}
            </div>
          </div>
        </div>
    );
  }
}

export default App;
