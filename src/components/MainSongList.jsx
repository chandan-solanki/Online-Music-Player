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
    <div className="fit-container max-[650px]:pb-[3rem] grid w-full grid-cols-5 gap-3 pt-10 max-[1300px]:grid-cols-4 max-[1000px]:grid-cols-3 max-[845px]:grid-cols-2">
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
