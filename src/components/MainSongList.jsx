import React from "react";
import MainSongListItem from "./MainSongListItem";

export default function MainSongList({
  songData,
  setPlayOrNot,
  masterSongId,
  setMasterSongId,
  playOrNot 
}) {

  return (
    <div className="fit-container pb-[2rem] grid w-full grid-cols-5 gap-3 pt-10 max-[1200px]:grid-cols-4 max-[1000px]:grid-cols-3">
      {songData.map((song) => {
        return (
          <MainSongListItem
            setMasterSongId={setMasterSongId}
            setPlayOrNot={setPlayOrNot}
            key={song.id}
            masterSongId={masterSongId}
            songId={song.id}
            playOrNot ={playOrNot}
            songName={song.songName}
            coverPath={song.coverPath}
          />
        );
      })}
    </div>
  );
}
