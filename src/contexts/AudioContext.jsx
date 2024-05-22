import { createContext, useState } from "react";
import { songdata } from "../../songdata";
import { useLocalState } from "../hooks/useLocalState";
import { useParams } from "react-router-dom";

// Step 1: Create a Context
export const AudioContext = createContext();

// Step 2: Create a Provider Component
export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(new Audio());
  const [currentSongId, setCurrentSongId] = useState(-100);
  const [playOrNot, setPlayOrNot] = useState(false);
  const [masterSongId, setMasterSongId] = useState(0);
  const [songData, setSongData] = useState(songdata);
  const [playListData, setPlayListData] = useLocalState("playListData", []);
  const [editData, SetEditData] = useState(null);
  const [editId, setEditId] = useState("");


  return (
    <AudioContext.Provider
      value={[
        audio,
        setAudio,
        currentSongId,
        setCurrentSongId,
        playOrNot,
        setPlayOrNot,
        masterSongId,
        setMasterSongId,
        songData,
        setSongData,
        playListData,
        setPlayListData,
        editData,
        SetEditData,
        editId,
        setEditId
      ]}
    >
      {children}
    </AudioContext.Provider>
  );
};
