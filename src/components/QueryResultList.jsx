import React from "react";
import QueryResultItem from "./QueryResultItem";
import { useAudioContext } from "../hooks/useAudioContext";

export default function QueryResultList({ qry  ,setPlSongs}) {
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

  return (
    <div className="pb-24  mt-10 flex h-auto w-full flex-col items-start justify-center gap-2">
      {/* QUERY RESULT ITEMS */}
      {songData
        .filter((song) => {
          if (qry !== "")
            return song.songName.toLowerCase().includes(qry.trim().toLowerCase());
        })
        .map((song) => (
          <QueryResultItem setPlSongs={setPlSongs} song={song} key={song.id} />
        ))}
    </div>
  );
}
