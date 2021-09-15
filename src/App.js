import React from "react";
import "./App.css";
// remember to always import the container (smart) components
import Notepad from "./containers/notepad-container";
import Notelist from "./containers/notelist-container";

function App() {
  return (
    <div>
      <div
        align="center"
        style={{
          backgroundColor: "#FFADDB",
          borderRadius: 10,
        }}
      >
        <h2>Notes</h2>
      </div>
      <div className="App" style={{ display: "flex" }}>
        <Notelist />
        <Notepad />
      </div>
    </div>
  );
}

export default App;
