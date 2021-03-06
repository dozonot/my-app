import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>My name is {props.name} and my age {props.age}.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  )
};

export default person;
