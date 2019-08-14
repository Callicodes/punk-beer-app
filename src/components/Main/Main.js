import React, { Component } from "react";
import { PATH_BASE, PATH_RANDOM, PATH_BEER } from "../../api/api";

import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomBeers: {}
    };
  }

  componentDidMount = () => {
    this.getRandomBeers();
  };

  getRandomBeers = () => {
    fetch(`${PATH_BASE}${PATH_BEER}${PATH_RANDOM}`)
      .then(response => response.json())
      .then(randomBeers => this.setRandomBeers(randomBeers));
  };

  setRandomBeers = randomBeers => {
    this.setState({
      randomBeers: randomBeers
    });

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1 className="App-main-title">{this.props.title}</h1>
      </div>
    );
  }
}

export default Main;
