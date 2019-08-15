import React, { Component } from "react";

import "./List.css";

class List extends Component {
  render() {
    return (
      <div className="list-container">
        <div className="list-container__item">
          <div className="list__movie-image">
            <span className="list__movie-vote-average">
              {this.props.item.tagline}
            </span>
            <img sr={this.props.item.image_url} alt={this.props.item.name} />
          </div>
          <div className="list__movie-title">{this.props.item.name}</div>
        </div>
      </div>
    );
  }
}
// console.log("wtf");
export default List;
