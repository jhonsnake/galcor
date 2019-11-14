import React from "react";
import styled from "styled-components";

export default function Card(props) {
  let { nombre, avatar, link } = props;
  return (
    <Wrapper>
      <a href={link}>
        <Avatar src={avatar} alt={nombre} />
        <Nombre>
          <span>{nombre.rendered}</span>
        </Nombre>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
  max-width: 100px;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Avatar = styled.img`
  object-fit: contain;
`;

const Nombre = styled.p`
  text-align: center;
  font-size: 0.8em;
`;
