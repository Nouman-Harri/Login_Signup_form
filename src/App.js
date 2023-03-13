import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Components/routing";
import "./App.css";

function App() {
  return (
    <div className="bg-[#f9fafb]">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
