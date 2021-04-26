import React from "react";
import "./card-small.css";

function CardSmall(props) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page views {props.pageviews}</p>
      <p className="card-small-icon"></p>
      <p className="card-small-number">87</p>
      <p className="card-small-percentage">
        <span>{props.growth}%</span>
      </p>
    </div>
  );
}

export default CardSmall;
