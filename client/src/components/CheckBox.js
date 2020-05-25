import React from 'react'


export const CheckBox = props => {
    return (
      <ul className = "checkbox">
      <li>
       <input className="checkmark1" key={props.id} onChange={props.handleCheckChildElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
       <span className="checkmark"></span>
      </li>
      </ul>
     
      
    )
}


export default CheckBox;