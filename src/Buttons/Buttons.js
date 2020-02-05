import React from 'react'
import "./Buttons.css"


const Buttons = (props)=>{
    
return (
    <div className="buttons">
        <button onClick={() => {
         props.setDay(props.randomDay)
         props.setMonth(props.randomMonth)
        //  props.setYear(props.randomYear)
        }}
        className= "prev-Pic">
            Random Pic!!
            </button>
    </div>
    )
}
export default Buttons