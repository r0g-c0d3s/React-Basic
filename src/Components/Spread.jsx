import { Modal } from "@mui/material";
import React from "react";

export default function Spread() {
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [6, 7, 8, 9, 10];
  let a = [...a1, ...a2];
  //   let b = [a1, a2];
  //   console.log(b, 111);
  //   console.log(a);

  let vehicle = {
    model: "BMW",
    brand: "X5",
    year: 2021,
    color: "black",
  };

  let updateVehicle = {
    topspeed: "250km/h",
    topgear: "8",
    color: "white",
  };
  let updated = {
    ...vehicle,
    ...updateVehicle,
  };

  console.log(updated, 222);

  const a4 = [1, 2, 3, 4, 5, 6];
  let [f, b, c, ...d] = a4;

  return (
    <div>
      <h1>Spread</h1>
      <h2>{f}</h2>
      <h2>{b}</h2>
      <h2>{c}</h2>
      <h2>{d}</h2>
    </div>
  );
}
