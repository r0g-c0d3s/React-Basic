import React from "react";

export default function Props({ myname, age }) {
  const Fun = () => <h1>I'm Vengence</h1>;

  return (
    <div>
      <h1>
        <b>Props</b>
      </h1>
      {Fun()}
      <h2>{myname}</h2>
      <h2>{age}</h2>
    </div>
  );
}
