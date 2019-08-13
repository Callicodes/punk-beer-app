import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  handleSearchChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;

    // Do something with `searchTerm`
    console.log(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className="SearchBar-wrapper">
        <form onSubmit={this.handleSearchSubmit}>
          <input
            className="search-beer-input"
            type="text"
            placeholder="Search beers..."
            onChange={this.handleSearchChange}
            value={searchTerm}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
