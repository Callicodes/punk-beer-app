import React from "react";
import FontAwesome from "react-fontawesome";

const BeerInfoBar = props => {
  return (
    <div className="bdb-beerinfoBar">
      <div className="bdb-beerinfoBar-content">
        <div className="bdb-beerinfobar-col">
          <span className="bdb-beer-infobar-tagline">{props.tagline}</span>
        </div>
        <div className="bdb-beerinfobar-col" />
      </div>
    </div>
  );
};

export default BeerInfoBar;
