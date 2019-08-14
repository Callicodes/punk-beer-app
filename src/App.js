import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-main">
          <div className="App-sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="App-content-wrapper">
            <h1 className="App-main-title">Random Beers </h1>
          </div>
        </div>

        <Main title="randomBeers" />
      </div>
    );
  }
}

export default App;
