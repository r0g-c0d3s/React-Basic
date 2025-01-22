import React from "react";

export default function Array() {
  const c = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const d = c.map((i, j) => (
    <h1>
      {++j}-{i}
    </h1>
  ));
  const JL = [
    {
      name: "Batman",
      age: 30,
      city: "Gotham",
      salary: 100000,
    },
    {
      name: "Superman",
      age: 30,
      city: "Metropolis",
      salary: 100000,
    },
    {
      name: "Flash",
      age: 30,
      city: "Central City",
      salary: 100000,
    },
  ];

  return (
    <div>
      <h1 style={{ color: "white", padding: "5px" }}>Array</h1>

      <table border={100} style={{ width: "100%" }}>
        <tr>
          <th>Number</th>
          <th>Letter</th>
        </tr>
        {c.map((k, l) => {
          return (
            <tr>
              <td>{l + 1}</td>
              <td>{k}</td>
            </tr>
          );
        })}
      </table>

      <table border={100} style={{ width: "100%" }}>
        <tr>
          <th style={{ width: "100%" }}>SL No.</th>
          <th style={{ width: "100%" }}>Name</th>
          <th style={{ width: "100%" }}>Age</th>
          <th style={{ width: "100%" }}>City</th>
          <th style={{ width: "100%" }}>Salary</th>
        </tr>
        {JL.map((d, i) => {
          return (
            <tr>
              <td>{++i}</td>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.city}</td>
              <td>{d.salary}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
