import React from "react";
import "./StarWars.css";

const Card = props => {
  return (
    <div className="profileCard">
      <p className="characterName">{props.name}</p>
      <div className="infoLabel">
        <p>Date of Birth: {props.birth_year}</p>
        <p>Eye Color: {props.eye_color}</p>
        <p>Height: {props.height}</p>
        <p>Mass: {props.mass}</p>
      </div>
    </div>
  );
};

export default Card;
