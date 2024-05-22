import React from "react";
import PlayOrPauseBtn from "./PlayOrPauseBtn";
import { useAudioContext } from "../hooks/useAudioContext";

export default function SelectedPlayListItem({ plsong, index }) {
  const { songName, id, coverPath, filePath } = plsong;
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
    <div className="flex w-full cursor-pointer items-center justify-between rounded-md px-4 py-2     hover:bg-elevatedHighlight">
      <div className="flex max-w-fit items-center justify-center gap-4  ">
        <div className="text-textSubdued font-semibold">{index + 1}</div>
        <div className="max-w-[50px] overflow-hidden rounded-md">
          <img className="w-full" src={coverPath} alt="song-img" />
        </div>
        <div className="text-lg font-semibold">{songName}</div>
      </div>

      <div>
        <PlayOrPauseBtn
          songId={id}
          setMasterSongId={setMasterSongId}
          masterSongId={masterSongId}
          setPlayOrNot={setPlayOrNot}
          playOrNot={playOrNot}
        />
      </div>
    </div>
  );
}
