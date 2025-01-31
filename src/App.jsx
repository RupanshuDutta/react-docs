import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <div className="app relative w-full h-screen bg-zinc-800">
      <Background/>
      <Foreground/>
    </div>
  );
}

export default App;
