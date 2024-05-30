import React, { useContext } from "react";
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
      // style={{}}
      onClick={(e) => {
        if (playOrNot && masterSongId === songId) {
          setPlayOrNot(false);
          setCurrentSongId(parseInt(songId));
        } else {
          setMasterSongId(parseInt(songId));
          setPlayOrNot(true);
        }
      }}
      className={`mr-2 h-[35px] w-[35px] rounded-full bg-[#1ed760] p-2 shadow-lg shadow-gray-900 max-[1000px]:h-[30px] max-[1000px]:w-[30px] max-[470px]:max-h-[25px] max-[470px]:max-w-[25px]`}
    >
      <div className="w-full">
        <img
          className="w-full "
          src={
            masterSongId === songId && playOrNot
              ? `/assets/pause.svg`
              : `/assets/play.svg`
          }
          alt="playorpause-img"
        />
      </div>
    </button>
  );
}
