import "./App.css";
import Arrow from "./Components/Arrow";
import ButtonUsage from "./Components/MUI/Button";
import ButtonAppBar from "./Components/nav";
import Array from "./Components/Array";
import Dest from "./Components/Dest";
import Spread from "./Components/Spread";
import Ternary from "./Components/Ternary";
import Props from "./Components/Props";
import Home from "./Components/Home";
import State from "./Components/State";
import Effect from "./Components/Effect";
import Color from "./Components/color";
import Error from "./Components/Error";
import BasicTable from "./Components/MUI/Table"
import MUI from "./Components/MUI"
import API from "./Components/API"

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
        <Route path="/*" element={<Error />} />
        <Route path="/arrow" element={<Arrow />} />
        <Route path="/button" element={<ButtonUsage />} />
        <Route path="/array" element={<Array />} />
        <Route path="/spread" element={<Spread />} />
        <Route path="/ternary" element={<Ternary />} />
        <Route path="/dest" element={<Dest />} />
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/color" element={<Color />} />
        <Route path="/table" element={<BasicTable />} />
        <Route path="/mui" element={<MUI />} />
        <Route path="/api" element={<API />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
