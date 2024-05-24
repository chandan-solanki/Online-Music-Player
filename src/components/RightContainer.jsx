import React, { useContext, useRef, useState } from "react";
import NavBar from "./NavBar";
import HeaderSongsList from "./HeaderSongsList";
import MainSongList from "./MainSongList";
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
        navRef.current.style.backgroundColor = "#212121";
      }}
      className="mr-3 max-[700px]:mx-0 set-height h-dvh overflow-y-auto rounded-xl bg-primary"
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
