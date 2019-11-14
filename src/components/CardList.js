import React from "react";
import Card from "./Card";
import styled from "styled-components";

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

  return <Wrapper>{personas}</Wrapper>;
};

export default CardList;

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
  overflow: scroll;
  white-space: nowrap;
  height: 350px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
