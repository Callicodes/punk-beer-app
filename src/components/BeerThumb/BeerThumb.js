import React from "react";
import { Link } from "react-router-dom";
// import "./BeerThumb.css";

const BeerThumb = props => {
  return (
    <div className="rmdb-moviethumb">
      {props.clickable ? (
        <Link to={{ pathname: `/beer/:Id`, beerName: `${props.beerName}` }}>
          <img src={props.image} alt="beerthumb" />
        </Link>
      ) : (
        <img src={props.image} alt="beerthumb" />
      )}
    </div>
  );
};

export default BeerThumb;
