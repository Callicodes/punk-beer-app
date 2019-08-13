import React from "react";
import punkLogo from "../../src/punk_logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <div className="App-header">
      <div className="App-logo">
        <a className="App-header-title" href="/">
          <img
            className="cornerstoneLogo"
            src="https://cdn.cornerstone.co.uk/317e304cd28af582b6f0a5002a279a62.svg"
            alt="Cornerstone"
          />
          <hr />
        </a>
      </div>

      <div>
        <a>
          <img className="punkLogo" src={punkLogo} alt="punkLogo" />
        </a>
      </div>
    </div>
  );
};

export default Header;
