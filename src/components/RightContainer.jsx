import React, { useContext, useRef, useState } from "react";
import NavBar from "./NavBar";
import HeaderSongsList from "./HeaderSongsList";
import MainSongList from "./MainSongList";
import { songdata } from "../../songdata";
import { AudioContext } from "../contexts/AudioContext";
import { useAudioContext } from "../hooks/useAudioContext";

export default function RightContainer() {
  const [
    audio,
    setAuio,
    currentSongId,
    setCurrentSongId,
    playOrNot,
    setPlayOrNot,
    masterSongId,
    setMasterSongId,
    songData,
    setSongData,
  ] = useAudioContext();
  const navRef = useRef(null);
  return (
    <div
      onScroll={(e) => {
        console.log(navRef.current);
        navRef.current.classList.add("backdrop-blur");
        navRef.current.style.backgroundColor = "rgba(20, 20, 20, 0.2)";
      }}
      className="mr-3 h-dvh overflow-y-auto rounded-xl bg-primary"
    >
      <NavBar navRef={navRef} />
      <HeaderSongsList
        songData={songData}
        playOrNot={playOrNot}
        masterSongId={masterSongId}
        setMasterSongId={setMasterSongId}
        setPlayOrNot={setPlayOrNot}
      />
      <MainSongList
        masterSongId={masterSongId}
        songData={songData}
        setPlayOrNot={setPlayOrNot}
        setMasterSongId={setMasterSongId}
        playOrNot={playOrNot}
      />
    </div>
  );
}
