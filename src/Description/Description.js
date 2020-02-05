import React from 'react'
import './Description.css'

const Description = (props)=>{
 
return (

    <div className="main-Desc">
        <div className='date'>
            <p>{props.picData.date}</p>
        </div>
        <div className='title'>
            <h2>{props.picData.title}</h2>
        </div>
        <div className='explain'>
            <p>{props.picData.explanation}</p>
        </div>
        
    </div>

    )
}
export default Description