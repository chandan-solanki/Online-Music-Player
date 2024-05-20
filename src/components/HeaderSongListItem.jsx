import React from "react";

import PlayOrPauseBtn from "./PlayOrPauseBtn";

export default function HeaderSongListItem({
  songName,
  coverPath,
  songId,
  setMasterSongId,
  masterSongId,
  setPlayOrNot,
  playOrNot,
}) {
  // const songImg = {import songImg from coverPath};
  return (
    <div className="flex h-full max-h-[70px] w-full max-w-[400px] items-center justify-between overflow-hidden rounded-md  bg-[#2a2a2a] max-[1200px]:max-h-[50px] max-[1200px]:max-w-[380px]">
      <div className="flex max-w-fit items-center justify-start gap-2 ">
        <div className="max-[1200px]:max-w-[50px] max-w-[70px]">
          <img className="w-full" src={`${coverPath}`} alt="song-header-img" />
        </div>
        <span className="font-semibold text-white">{songName}</span>
      </div>
      <PlayOrPauseBtn
        playOrNot={playOrNot}
        setPlayOrNot={setPlayOrNot}
        masterSongId={masterSongId}
        setMasterSongId={setMasterSongId}
        songId={songId}
        size={"20"}
      />
    </div>
  );
}
