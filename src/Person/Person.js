import React from "react";

const person = props => {
  return (
    <div>
      I'm a person {props.name}. I'm {props.age} years old.
      <p>{props.children}</p>
    </div>
  );
};

export default person;
