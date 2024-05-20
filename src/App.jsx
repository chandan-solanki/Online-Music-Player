import "./App.css";
import LeftContainer from "./components/LeftContainer";
import { Outlet } from "react-router-dom";
import MasterSong from "./components/MasterSong";
import { AudioProvider } from "./contexts/AudioContext";
import { useState } from "react";

function App() {
  return (
    <div className="main-app overflow-hidden">
      <LeftContainer />
      <AudioProvider>
        <Outlet />
        <MasterSong />
      </AudioProvider>
    </div>
  );
}

export default App;
