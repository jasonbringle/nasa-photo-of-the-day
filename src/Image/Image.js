import React from "react";
import "./image.css";
import styled from "styled-components";

const Npotd = styled.img`
    width:500px;
`
const Picture = styled.div`
    display:flex;
    justify-items:center;
`;

const Image = props => {
  return (
    <Picture>
      <Npotd alt="Pict of the day" src={props.picData.url} />
    </Picture>
  );
};
export default Image;
