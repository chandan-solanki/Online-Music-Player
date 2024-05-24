import React, { useState } from "react";
import PlayOrPauseBtn from "./PlayOrPauseBtn";

export default function MainSongListItem({
  songName,
  coverPath,
  songId,
  masterSongId,
  setPlayOrNot,
  setMasterSongId,
  playOrNot,
}) {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      className="transition-color flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg p-3    duration-150 hover:bg-highlight"
    >
      <div className="relative flex w-full max-w-[180px] flex-col items-start justify-start text-white  max-[845px]:max-w-[200px]">
        <div className="w-full max-w-full overflow-hidden rounded-lg">
          <img
            className=" w-full"
            src={`${coverPath}`}
            alt="main-song-img"
          />
        </div>

        <div className="py-2 text-[.9rem] font-semibold"> {songName}</div>

        <div
          className={`absolute bottom-0 right-1 opacity-0 transition-all duration-200 ${mouseOver ? "overActive" : ""}`}
        >
          <PlayOrPauseBtn
            playOrNot={playOrNot}
            setPlayOrNot={setPlayOrNot}
            masterSongId={masterSongId}
            setMasterSongId={setMasterSongId}
            songId={songId}
            size={"50px"}
          />
        </div>
      </div>
    </div>
  );
}
