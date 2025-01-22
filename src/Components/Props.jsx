import React from "react";

export default function Props({ myname, age }) {
  const Fun = (props) => <h1>I'm Vengence{props.name}</h1>;

  return (
    <div>
      <h1>
        <b>Props</b>
      </h1>
      <Fun name= " Batman"/>
      <h2>{myname}</h2>
      <h2>{age}</h2>
    </div>
  );
}
