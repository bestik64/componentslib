import { useState } from "react";
import "./App.css";
import Select from "./components/Select/Select";

function App() {
  return (
    <div className="App">
      <Select optionLabels={["bla", "bla2"]} />
    </div>
  );
}

export default App;
