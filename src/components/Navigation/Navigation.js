import React from "react";
import Styles from "styled-components";
import { Link } from "react-router-dom";
// const Styles4Nav = `styled.div

// `;

const Navigation = props => {
  return (
    // <Styles4Nav>
    <div className="bdb-navigation">
      Navigation
      <div className="bdb-navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p />
        <p>{props.beer}</p>
      </div>
    </div>
    // </Styles4Nav>
  );
};

export default Navigation;
