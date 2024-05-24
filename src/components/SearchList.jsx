import React from "react";
import SearchItem from "./SearchItem";
import { useAudioContext } from "../hooks/useAudioContext";

export default function SearchList({ searchInput, setSearchInput }) {
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
    <div className="fit-container mt-16 text-white">
      <span className="text-2xl font-semibold">Top Results</span>
      <div className="grid grid-cols-4 max-[845px]:grid-cols-3 max-[700px]:grid-cols-2 gap-3 items-center justify-start py-4">
        {songData
          .filter((song) => {
            if (searchInput !== "") {
              return song.songName
                .toLowerCase()
                .includes(searchInput.toLowerCase());
            }
          })
          .map((song) => {
            return (
              <SearchItem
                setMasterSongId={setMasterSongId}
                masterSongId={masterSongId}
                setPlayOrNot={setPlayOrNot}
                playOrNot={playOrNot}
                key={song.id}
                song={song}
              />
            );
          })}
      </div>
    </div>
  );
}
