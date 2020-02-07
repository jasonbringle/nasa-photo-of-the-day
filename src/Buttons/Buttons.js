import React from 'react'
import "./Buttons.css"
import styled from 'styled-components'

const ButtonCont = styled.div`
display:flex;
    justify-content: center;

    align-items: center;
    height:25px;
    margin: 2rem;
`
const Button = styled.button`
    width: 40%;
    height: 40px;
    box-shadow: 5px 10px 18px rgb(31, 31, 31);
    background-color: lightblue;
    border-radius: 9px;
    text-decoration:none;
    font-size: 1rem;
    outline: none;
`;

const Buttons = (props)=>{
    
return (
    <ButtonCont>
        <Button onClick={() => {
         props.setDay(props.randomDay)
         props.setMonth(props.randomMonth)
         props.setYear(props.randomYear())
        }}
        className= "random-pic">
            Random Pic!!
        </Button>
    </ButtonCont>
    )
}
export default Buttons