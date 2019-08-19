import React from "react";
import Styles from "styled-components";
import { Link } from "react-router-dom";
import "./BeerThumb.css";

const BeerThumb = props => (
  <div className="bdb-beerthumb">
    <p>{props.beerName}</p>
    {props.clickable ? (
      <Link
        to={{ pathname: `/${props.beerId}`, beerName: `${props.beerName}` }}
      >
        <img className="bdb-beering" src={props.image} alt="beerthumb" />
      </Link>
    ) : (
      <img src={props.image} alt="beerthumb" />
    )}
    <nbsp />
  </div>
);

export default BeerThumb;
