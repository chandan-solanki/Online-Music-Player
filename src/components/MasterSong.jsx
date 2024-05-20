import Play from "../assets/play.svg";
import Pause from "../assets/pause.svg";
import LeftSong from "../assets/asset 131.svg";
import RightSong from "../assets/asset 133.svg";
import VolumeIcon from "../assets/asset 138.svg";
import { useAudioContext } from "../hooks/useAudioContext";
import { useEffect, useRef, useState } from "react";

export default function MasterSong() {
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

  const durationRange = useRef(null);

  console.log("master control render ");

  console.log("PLAY OR NOT : ", playOrNot);
  console.log("CURRENT SONG ID : ", currentSongId);
  console.log("MASTER SONG ID : ", masterSongId);

  if (playOrNot === true) {
    if (currentSongId !== masterSongId) {
      audio.src = songData[masterSongId].filePath;
    }
    audio.play();
  } else {
    audio.pause();
  }

  // console.log(durationRange.current);
  // console.log("master song control : ", masterSongId);
  // console.log("current song currentTime  : ", audio.currentTime);

  // console.log("current song duration  : ", audio.duration);

  function forwardSong() {
    console.log("forward");
    setPlayOrNot(true);

    setMasterSongId((prv) => {
      if (prv === songData.length - 1) {
        return 0;
      }
      return (prv = prv + 1);
    });
  }

  function backwardSong() {
    console.log("backward");

    setMasterSongId((prv) => {
      if (prv === 0) return songData.length - 1;
      return (prv = prv - 1);
    });
  }

  const [firstPlay, setFirstPlay] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const currentTime = audio.currentTime;
      const durationOfSong = audio.duration;
      const per = Math.floor((currentTime / durationOfSong) * 100);
      console.log("perchantage : ", per);
      if (per === 100) {
        forwardSong();
      }
      if (per) {
        durationRange.current.value = per;
        durationRange.current.style.background = `linear-gradient(to right, #1ed760 ${per}%, #4d4d4d ${per}%)`;
      }
    }, 1000);
  }, []);

  function setDurationOfSong(e) {
    //perchantage / 100 * duration
    const songTime = Math.floor((e.target.value / 100) * audio.duration);
    audio.currentTime = songTime;
    console.log({ songTime });
    durationRange.current.style.background = `linear-gradient(to right, #1ed760 ${e.target.value}%, #4d4d4d ${e.target.value}%)`;
  }

  return (
    <div className="fixed bottom-0 left-0 z-10 flex h-[100px] w-full justify-between bg-black text-white">
      {/* master cover and songName */}
      <div className="ml-4 flex w-[200px] items-center gap-4">
        <div className="h-[80px] max-w-[80px] overflow-hidden p-1">
          <img
            className="w-full rounded-xl"
            src={songData[masterSongId].coverPath}
            alt="master-song-cover"
          />
        </div>
        <span className="font-bold">{songData[masterSongId].songName}</span>
      </div>

      {/* MASTER CONTROL FOR SONG */}
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex gap-[1.5rem]">
          {/* BACKWARD SONG */}
          <img
            onClick={() => {
              backwardSong();
            }}
            className="w-[20px] cursor-pointer invert-[55%] transition-all duration-200 hover:invert"
            src={LeftSong}
            alt="left-song-btn"
          />

          {/* MAIN MASTER PLAY OR PAUSE BTN  */}
          <div
            onClick={() => {
              setPlayOrNot(!playOrNot);
              if (firstPlay) setCurrentSongId(masterSongId);
              setFirstPlay(true);
            }}
            className="rounded-full bg-white"
          >
            <img
              className="w-[40px] cursor-pointer p-2"
              src={playOrNot ? Pause : Play}
              alt="playOrPauseImg"
            />
          </div>

          {/* FORWARD SONG */}
          <img
            onClick={() => {
              forwardSong();
            }}
            className="w-[20px] cursor-pointer invert-[55%] transition-all duration-200 hover:invert"
            src={RightSong}
            alt="right-song-btn"
          />
        </div>

        {/* SONG DURATION CONTROL */}
        <div className="w-[400px]">
          <input
            ref={durationRange}
            onChange={setDurationOfSong}
            className="w-full"
            type="range"
            min="0"
            max="100"
            step="1"
            name="songRange"
            id="songRange"
            defaultValue={0}
          />
        </div>
      </div>

      {/* MASTER SONG VOLUME CONTROL */}
      <div className="mr-4 flex items-center justify-center gap-2">
        <img className="w-[15px] invert" src={VolumeIcon} alt="" />
        <input
          onChange={(e) => {
            console.log("volume :  ", e.target.value / 100);
            audio.volume = e.target.value / 100;
            e.target.style.background = `linear-gradient(to right, #1ed760 ${e.target.value}%, #4d4d4d ${e.target.value}%)`;
          }}
          className="w-[80px]"
          type="range"
          min="0"
          max="100"
          name="volume"
          id="volume"
          defaultValue={100}
        />
      </div>
    </div>
  );
}
