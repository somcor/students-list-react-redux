import React from 'react';

const Input = (props) => {
  return(
      <input type="text" value={props.value} placeholder={props.placeholder} onChange={(e) => props.onChangeInput(e)} />
  )
}

export default Input;