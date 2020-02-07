import React from 'react'
import './Description.css'
import styled from 'styled-components'

const MainDesc = styled.div`
    display:flex;
    flex-direction: row;
`
const Date = styled.div`
display:flex;
    justify-content: center;
    font-style:italic;
    color:white;
`
const Title = styled.div`
border-top: 1px solid black;
    color:white;
`

const Explain = styled.div`
text-align: start;
    border-bottom: 1px solid black;
    color:white;
`
const DateAndTitle =styled.div`
    display:flex;
    flex-direction:column;
`
const Description = (props)=>{
 
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

    )
}
export default Description