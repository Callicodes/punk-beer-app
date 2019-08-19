import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
// import Main from "./components/Main/Main";
// import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Beer from "../src/Beer/Beer";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Home from "../src/Home/Home";

// import List from "./components/List/List";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route path="/:beerId" component={Beer} exact /> */}
            <Route path="/:beerId" component={Beer} exact />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
