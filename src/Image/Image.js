import React from 'react'
import "./image.css"

const Image = (props)=>{
return (
    <img className='npotd' alt="Pict of the day" src={props.picData.url}/>
    )
}
export default Image