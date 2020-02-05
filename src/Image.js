import React from 'react'

const Image = (props)=>{
    
return (
    <img className='npotd' alt="Pict of the day" src={props.media_type}/>
    )
}
export default Image