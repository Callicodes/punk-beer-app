import React, { Component } from "react";
import { PATH_BASE, PATH_BEER } from "../../api/api";
import List from "../../components/List/List";

import "./Main.css";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      Beers: []
    };
  }

  componentDidMount() {
    fetch(`${PATH_BASE}${PATH_BEER}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ Beers: data });
        console.log(this.state);
      });
  }

  // setBeers = Beers => {
  //   this.setState({
  //     Beers: Beers
  //   });

  // };

  render() {
    // const { Beers } = this.state.Beers;
    // const { results } = Beers;
    // console.log({ Beers, results });

    return (
      <div>
        {this.state.Beers.map((item, key) => (
          <List item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default Main;
