import React from 'react';

const Input = (props) => {
  return (
    <div>
      <label>{props.title}
        <input type={props.type} name={props.name}/>
      </label>
    </div>
  );
}

export default Input;