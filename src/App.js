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
            <h1 className="App-main-title">All Beers </h1>
            <Main title="randomBeers" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
