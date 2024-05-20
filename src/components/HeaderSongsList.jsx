import React from "react";
import HeaderSongListItem from "./HeaderSongListItem";

export default function HeaderSongsList({
  songData,
  masterSongId,
  setMasterSongId,
  setPlayOrNot,
  playOrNot,
}) {
  const arr = Array(8).fill(0);
  return (
    <div className="fit-container grid w-full grid-cols-3 gap-3  pt-10 max-[1200px]:grid-cols-2">
      {songData.map((song, i) => {
        if (i <= 7)
          return (
            <HeaderSongListItem
              playOrNot={playOrNot}
              setPlayOrNot={setPlayOrNot}
              masterSongId={masterSongId}
              setMasterSongId={setMasterSongId}
              songName={song.songName}
              coverPath={song.coverPath}
              key={song.id}
              songId={song.id}
            />
          );
      })}
    </div>
  );
}
