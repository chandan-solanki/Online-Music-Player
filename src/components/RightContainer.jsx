import React, { useContext, useEffect, useRef, useState } from "react";
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

  const handleScroll = (e) => {

    navRef.current.classList.toggle(
      "bgchange",
      e.target.scrollTop > 100,
    );

  };

  return (
    <div
      onScroll={handleScroll}
      className="set-height mr-3 h-dvh overflow-y-auto rounded-xl bg-primary max-[700px]:mx-0"
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
