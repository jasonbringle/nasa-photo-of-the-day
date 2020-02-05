import React from 'react'
import "./Buttons.css"

const Buttons = (props)=>{
    
 const random = Math.floor((Math.random() * 10));
    console.log(random)
return (
    <div className="buttons">
        <button onClick={() => {
         
        }}
        className= "prev-Pic">
            Random Pic!!
            </button>
    </div>
    )
}
export default Buttons