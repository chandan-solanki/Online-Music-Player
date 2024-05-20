import React, { useContext } from "react";
import PlayImg from "../assets/play.svg";
import PauseImg from "../assets/pause.svg";
import { songdata } from "../../songdata";
import { AudioContext } from "../contexts/AudioContext";

export default function PlayOrPauseBtn({
  size,
  songId,
  setMasterSongId,
  masterSongId,
  setPlayOrNot,
  playOrNot,
}) {
  const { 3: setCurrentSongId } = useContext(AudioContext);

  return (
    <button
      onClick={(e) => {
        console.log({ songId });
        if (playOrNot && masterSongId === songId) {
          setPlayOrNot(false);
          setCurrentSongId(parseInt(songId));
        } else {
          setMasterSongId(parseInt(songId));
          setPlayOrNot(true);
        }
      }}
      className={`mr-2 h-[40px] w-[40px] rounded-full bg-[#1ed760] p-2 shadow-lg shadow-gray-900 max-[1000px]:h-[30px] max-[1000px]:w-[30px]`}
    >
      <div className="w-full">
        <img
          className="w-full "
          src={masterSongId === songId && playOrNot ? PauseImg : PlayImg}
          alt="playorpause-img"
        />
      </div>
    </button>
  );
}
