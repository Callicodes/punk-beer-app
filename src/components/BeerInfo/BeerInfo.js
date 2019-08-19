import React from "react";
import Styles from "styled-components";
import FontAwesome from "react-fontawesome";
import BeerThumb from "../BeerThumb/BeerThumb";

// const Styles4BeerInfo = `styled.div

// .bdb-beerInfo{
//   text-align: center;
// }

// `;

const BeerInfo = props => {
  return (
    // <Styles4BeerInfo>
    <div
      className="bdb-beerInfo"
      style={{
        background: props.image_url ? props.image_url : "black"
      }}
    >
      <div className="bdb-beerInfo-content">
        <div className="bdb-beerInfo-thumb">
          <BeerThumb
            image={props.image_url ? props.image_url : "black"}
            clickable={false}
          />

          <div className="bdb-beerinfo-text">
            <h1>{props.beerName}</h1>
            <h3>Description</h3>
            <div className="bdb-ph-info">
              <meter
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={props.ph * 10}
              />
              <div className="bdb-ph-info" />
              <FontAwesome className="fa-beer" size="5x" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Styles4BeerInfo>
  );
};

export default BeerInfo;
