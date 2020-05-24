import React from 'react';
import '../styles/Checkbox.scss';


export const CheckBox = props => {
    return (
      <li>
       <input className = "checkmark" key={props.id} onChange={props.handleCheckChildElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
      
    )
}


export default CheckBox;