import React from "react";
import Card from "./Card.js";

const CardCollection = props => {
  let cardArray = props.starwarsChars.map(item => {
    return (
      <Card
        name={item.name}
        birth_year={item.birth_year}
        eye_color={item.eye_color}
        height={item.height}
        mass={item.mass}
        key={item.created}
      />
    );
  });

  return <div className="cardList">{cardArray}</div>;
};

export default CardCollection;