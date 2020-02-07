import React from "react";
import styled from "styled-components";

const NasaImg = styled.img`
    width:25vw;
`
const Title = styled.h1`
    font-size: 5rem;
    font-family: Helvetica Narrow, sans-serif;
`
const HeaderDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height:10rem;
    background-color:lightblue;
    box-shadow: 5px 10px 18px rgb(56, 56, 56);
    background-color: lightcyan;`

const Header = props => {
  return (
    <HeaderDiv>
        <NasaImg src= "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"/>
        <Title>Picture of The Day</Title>
    </HeaderDiv>
  );
};
export default Header;
