import React, { Component } from "react";
import { PATH_BASE, PATH_BEER } from "../api/api";
import Navigation from "../components/Navigation/Navigation";
import BeerInfo from "../components/BeerInfo/BeerInfo";
import BeerInfoBar from "../components/BeerInfoBar/BeerInfoBar";
import "../Beer/Beer.css";

class Beer extends Component {
  state = {
    beer: [{}]
  };
  componentDidMount() {
    //first fetch the beer..
    const endpoint = `${PATH_BASE}/beers/${this.props.match.params.beerId}`;
    this.fetchItems(endpoint);
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ beer: result });
        }
      });
  };

  render() {
    return (
      <div className="bdb-beer">
        {this.state.beer ? (
          <div>
            <Navigation beer={this.props.location.beerName} />
            <BeerInfo beer={this.state.beer} />
            <BeerInfoBar beer={this.state.beer.image_url} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Beer;
