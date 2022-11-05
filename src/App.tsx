import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
