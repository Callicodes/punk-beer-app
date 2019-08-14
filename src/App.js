import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main title="randomBeers" />
      </div>
    );
  }
}

export default App;
