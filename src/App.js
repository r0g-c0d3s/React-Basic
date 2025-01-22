import "./App.css";
import Arrow from "./Components/Arrow";
import ButtonUsage from "./Components/Button";
import ButtonAppBar from "./Components/nav";
import Array from "./Components/Array";
import Dest from "./Components/Dest";
import Spread from "./Components/Spread";
import Ternary from "./Components/Ternary";
import Props from "./Components/Props";
import Home from "./Components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let my = {
    color: "#fff",
  };

  function click() {
    alert("Hello!");
  }

  const name = "BATMAN";

  return (
    // <div className="App" style={my}>
    //   <ButtonAppBar />
    //   <h1>Hi there!</h1>
    //   <img src="data:image/jpeg;base64,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" />

    //   <ButtonUsage />
    //   <Arrow />

    //   {/* <button onClick={click}>Click me!</button>
    //   <Array />
    //   <Dest /> */}
    //   <Spread />
    //   <Ternary />
    //   <Props myname={name} age={25} click={click} />
    // </div>

    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/arrow" element={<Arrow />} />
        <Route path="/button" element={<ButtonUsage />} />
        <Route path="/array" element={<Array />} />
        <Route path="/spread" element={<Spread />} />
        <Route path="/ternary" element={<Ternary />} />
        <Route path="/dest" element={<Dest />} />
        <Route path="/props" element={<Props />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
