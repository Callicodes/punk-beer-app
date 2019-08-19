import React from "react";
import styled from "styled-components";
import punkLogo from "../../src/punk_logo.svg";
import SearchBar from "../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

// import "./Header.css";
const Styles = styled.div`
  .App-header {
    display: grid;
    grid-template-columns: 15% auto;
    background-color: black;
  }

  .App-header-title {
    padding: 12px;
    text-align: center;
    display: block;
    transition: all 0.5s ease;
  }

  .cornerstoneLogo {
    margin-top: 27px;
  }

  hr {
    margin-top: -5px;
    color: lightblue;
  }
  .punkLogo {
    height: 45px;
    float: right;
    margin-top: 30px;
    margin-right: 35px;
  }
  .App-header-title-punkLogo {
    /* width: 100%;
  top: 0;
  left: -100%;
  text-align: center;
  visibility: hidden;
  padding: 15px 0;
  background-color: #191c1f; */
    /* position: absolute; */

    /* /* display: block; */
    /* display: block;
  float: right; */
    transition: all 0.5s cubic-bezier(0.95, -0.6, 0.73, 1.73);
    transform: rotateY(270deg) translateX(-20px);
    transform-origin: center right;
    padding: 16px;
    width: 40px;
  }

  .App-header-title-punkLogo img {
    height: 65px;
  }

  .App-logo {
    overflow: hidden;
    position: relative;
  }
  /* 
.App-logo:hover .App-header-title {
  visibility: hidden;
}

.App-logo:hover .App-header-title-punkLogo {
  visibility: visible;
  left: 0;
} */
`;
const Header = () => {
  return (
    <Styles>
      <div className="App-header">
        <div className="App-logo">
          {/* <a className="App-header-title" href="/"> */}
          <Link to="/">
            <img
              className="cornerstoneLogo"
              src="https://cdn.cornerstone.co.uk/317e304cd28af582b6f0a5002a279a62.svg"
              alt="Cornerstone"
            />
          </Link>
          <hr />
          {/* </a> */}
        </div>

        <div>
          <a href="https://punkapi.com">
            <img className="punkLogo" src={punkLogo} alt="punkLogo" />
          </a>
          {/* <SearchBar /> */}
        </div>
      </div>
    </Styles>
  );
};

export default Header;
