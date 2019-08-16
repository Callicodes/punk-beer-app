import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";
import "../App.css";

const Home = () => {
  return (
    // <div className="App-main">
    //   <div className="App-sidebar-wrapper">
    //     <Sidebar />
    //   </div>
    //   <div className="App-content-wrapper">
    //     <h1 className="App-main-title">All Beers </h1>
    //     <Main title="randomBeers" />
    //   </div>
    // </div>

    <div className="App-main">
      <div className="App-sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="App-content-wrapper">
        <h1 className="App-main-title">All Beers </h1>
        <Main title="randomBeers" />
      </div>
    </div>
  );
};

export default Home;
