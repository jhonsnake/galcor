import React from "react";
import Card from "./Card";

const CardList = props => {
  const personas = props.data.map(persona => {
    return (
      <Card
        key={persona.id}
        nombre={persona.title}
        avatar={persona.jetpack_featured_media_url}
        link={persona.link}
      />
    );
  });

  return <div>{personas}</div>;
};

export default CardList;
