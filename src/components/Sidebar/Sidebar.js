import React from "react";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="App-sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-menu__item">
          <a href="/" className="is-active">
            Home
          </a>
        </li>
        {/* <li className="sidebar-menu__item">
          <a href="/top-rated">Top Rated</a>
        </li>
        <li className="sidebar-menu__item">
          <a href="/coming-soon">Coming soon</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
