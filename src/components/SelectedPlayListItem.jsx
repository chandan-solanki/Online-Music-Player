import React from "react";
import PlayOrPauseBtn from "./PlayOrPauseBtn";
import { useAudioContext } from "../hooks/useAudioContext";

export default function SelectedPlayListItem({ plsong, index, setPlSongs }) {
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

  function handleDeleteClick(e) {
    setPlSongs((prv) => {
      const newPlSongs = prv.filter((playlistSong) => {
        if (playlistSong.id !== id) return playlistSong;
      });
      return newPlSongs;
    });
  }

  return (
    <div className="flex w-full items-center justify-between rounded-md px-4 py-2 hover:bg-elevatedHighlight max-[700px]:px-1">
      <div className="flex w-full max-w-fit items-center justify-start gap-4  ">
        <div className="font-semibold text-textSubdued">{index + 1}</div>
        <div className="max-w-[50px] max-h-[50px] overflow-hidden rounded-md">
          <img className="w-full" src={coverPath} alt="song-img" />
        </div>
        <div className="text-lg font-semibold max-[700px]:text-[12px]">
          {songName}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <PlayOrPauseBtn
          size={"32px"}
          songId={id}
          setMasterSongId={setMasterSongId}
          masterSongId={masterSongId}
          setPlayOrNot={setPlayOrNot}
          playOrNot={playOrNot}
        />
        <div className="max-w-[35px]">
          <img
            onClick={handleDeleteClick}
            src="/assets/deleteImg.svg"
            alt="delete-img"
            className="w-full cursor-pointer p-2   invert"
          />
        </div>
      </div>
    </div>
  );
}
