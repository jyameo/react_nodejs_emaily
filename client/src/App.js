import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to StallionEye.</p>
        <a href="/auth/google">Sign In with google</a>
      </header>
    </div>
  );
}

export default App;
