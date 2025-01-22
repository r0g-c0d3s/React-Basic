import React from "react";

export default function Dest() {
  const fruits = ["apple", "banana", "cherry"];
  let f1 = fruits[0]; //old method
  let f2 = fruits[1]; //old method
  let f3 = fruits[2]; //old method

  let [a, b, c] = fruits; //new method
  let no = [1 + 1, 2 + 2, 3 + 3];
  let [n1, n2, n3] = no;
  let u = {
    name: "Batman",
    age: 30,
    city: "Gotham",
    salary: 100000,
    Language: { l1: "English", l2: "Hindi" },
  };
  let { name, age, city, salary } = u;
  let { l1, l2 } = u.Language;

  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{c}</h1>
      <h1>{n1}</h1>
      <h1>{name}</h1>
      <h1>{l1}</h1>
    </div>
  );
}
