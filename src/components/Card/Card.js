import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-image" src={props.img} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
