import React from "react";

export default function Ternary() {
  const Text = () => {
    let a = 10;
    // if (a === "10") {
    //   return <h1>A is true</h1>;
    // } else {
    //   return <h1>A is false</h1>;
    // }

    return a === 10 ? (
      <h1>A is 10</h1>
    ) : a === 15 ? (
      <h1>A is 15</h1>
    ) : (
      <h1>A is 78</h1>
    );
  };
  return (
    <div>
      <h1>Ternary</h1>
      {Text()}
      {/* <Text /> */}
    </div>
  );
}
