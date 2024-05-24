import React, { useState } from "react";
import PlayOrPauseBtn from "./PlayOrPauseBtn";

export default function ({
  song,
  playOrNot,
  setPlayOrNot,
  masterSongId,
  setMasterSongId,
}) {
  const [mouseOver, setMouseOver] = useState(false);
  const { id, songName, coverPath, filePath } = song;
  return (
    <div
      onMouseOver={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => setMouseOver(false)}
      className="relative flex flex-col w-fit items-start rounded-lg bg-highlight p-3"
    >
      <div className="max-w-[150px]  overflow-hidden rounded-lg">
        <img className="w-full" src={coverPath} alt="search-song-img" />
      </div>
      <span className="max-[700px]:text-[12px] pt-2 font-semibold">{songName}</span>
      <div
        className={`absolute bottom-0 right-6  opacity-0 transition-all duration-200 ${mouseOver ? "overActive" : ""}`}
      >
        <PlayOrPauseBtn
          playOrNot={playOrNot}
          setPlayOrNot={setPlayOrNot}
          masterSongId={masterSongId}
          setMasterSongId={setMasterSongId}
          songId={id}
          size={"20"}
        />
      </div>
    </div>
  );
}
