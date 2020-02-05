import React from 'react'
const Description = (props)=>{

    console.log(props);
 
return (

    <div className="main-Desc">
        <div className='date'>
            <p>{props.date}</p>
        </div>
        <div className='title'>
            <p>{props.title}</p>
        </div>
        <div className='explain'>
            <p>{props.explanation}</p>
        </div>
        
    </div>

    )
}
export default Description