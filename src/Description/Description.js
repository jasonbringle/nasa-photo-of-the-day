import React from "react";
import "./Description.css";
import styled from "styled-components";

const MainDesc = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width:50%;
    border: 10px red solid;
`;
const Date = styled.div`
    font-style: italic;
    color: white;
`;
const Title = styled.div`
    color: white;
    width: 30vw;
`;

const Explain = styled.div`
    padding: 2rem;
    text-align: start;
    color: white;
`;

const DateAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
`;

const Description = props => {
  return (
    <MainDesc>
      <DateAndTitle>
        <Title>
          <h2>{props.picData.title}</h2>
        </Title>
        <Date>
          <p>{props.picData.date}</p>
        </Date>
      </DateAndTitle>
      <Explain>
        <p>{props.picData.explanation}</p>
      </Explain>
    </MainDesc>
  );
};

export default Description;
