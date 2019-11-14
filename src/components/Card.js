import React from "react";
import styled from "styled-components";

export default function Card(props) {
  let { nombre, avatar, link } = props;
  return (
    <Wrapper>
      <a href={link} target="_blank">
        <Avatar src={avatar} alt={nombre} />
        <Nombre>
          <span>{nombre.rendered}</span>
        </Nombre>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 120px;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px;
  position: relative;
  display: inline-block;
  transition: transform 300ms ease-in-out;
  box-shadow: 0px 2px 5px 0px rgba(168, 168, 168, 1);
  &:hover {
    box-shadow: 0px 9px 21px 0px rgba(112, 112, 112, 1);
    transform: scale(1.2);
  }
  &:hover ~ & {
    transform: translate3d(15px, 0, 15px);
    transition: 300ms all;
    transform-origin: center center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1000ms;
  &:hover {
    transform: scale(1.2);
  }
`;

const Nombre = styled.p`
  text-align: center;
  font-size: 0.9em;
  padding: 5px;
  z-index: 9;
  color: white;
  font-weight: bold;
  position: absolute;
  bottom: -26px;
  margin: 0 auto;
  width: 100%;
  height: 50px;
  transition: 450ms opacity;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;
