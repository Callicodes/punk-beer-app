import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./List.css";

class List extends Component {
  render() {
    return (
      <div className="list-container">
        <div className="list-container__item">
          <div>
            <span className="list__beer-first-brewed">
              {this.props.item.name}
              <p>{this.props.item.beer_abv}</p>/
            </span>
            <div>
              <img
                src={this.props.item.image_url}
                alt={this.props.item.name}
                className="list__beer-image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// console.log("wtf");
export default List;
