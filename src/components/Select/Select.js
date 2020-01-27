import React from 'react';

const Select = (props) => {
  return(
      <select defaultValue={props.value} onChange={e => props.onSelectChange(e)}>
        {Object.keys(props.options).map((item, index) => {
          return <option key={index} value={props.options[item].title}>{props.options[item].title}</option>
        })}
      </select>
  )
}

export default Select;