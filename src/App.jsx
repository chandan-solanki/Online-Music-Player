import "./App.css";
import LeftContainer from "./components/LeftContainer";
import { Outlet } from "react-router-dom";
import MasterSong from "./components/MasterSong";
import { AudioProvider } from "./contexts/AudioContext";

function App() {
  return (
    <div className="main-app overflow-hidden select-none text-white">
      <AudioProvider>
        <LeftContainer />
        <Outlet />
        <MasterSong />
      </AudioProvider>
    </div>
  );
}

export default App;
