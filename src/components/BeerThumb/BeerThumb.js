import React from "react";
import { Link } from "react-router-dom";
// import "./BeerThumb.css";

const BeerThumb = props => {
  return (
    <div className="rmdb-beerthumb">
      <p>{props.beerName}</p>
      {props.clickable ? (
        <Link
          to={{ pathname: `/${props.beerId}`, beerName: `${props.beerName}` }}
        >
          <img clasName="bdb-beerimg" src={props.image} alt="beerthumb" />
        </Link>
      ) : (
        <img src={props.image} alt="beerthumb" />
      )}
    </div>
  );
};

export default BeerThumb;
