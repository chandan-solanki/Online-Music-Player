import Play from "/public/assets/play.svg";
import Pause from "/public/assets/pause.svg";
import LeftSong from "/public/assets/asset 131.svg";
import RightSong from "/public/assets/asset 133.svg";
import VolumeIcon from "/public/assets/asset 138.svg";
import { useAudioContext } from "../hooks/useAudioContext";
import { useEffect, useRef, useState } from "react";
// import { songBgColors } from "../songBgColors";
import { songBgColors } from "../songBgColors";

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
  const showCurrentSongTime = useRef(null);
  // console.log(showCurrentSongTime);

  // console.log("master control render ");

  // console.log("PLAY OR NOT : ", playOrNot);
  // console.log("CURRENT SONG ID : ", currentSongId);
  // console.log("MASTER SONG ID : ", masterSongId);

  if (playOrNot === true) {
    if (currentSongId !== masterSongId) {
      audio.src = songData[masterSongId].filePath;
    }

    let playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Automatic playback started!
          // Show playing UI.
          // We can now safely pause video...
          // audio.play();
          setCurrentSongId(masterSongId);
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
          // audio.pause();
          console.log({ error });
        });
    }
  } else {
    audio.pause();
  }

  function forwardSong() {
    setPlayOrNot(true);
    durationRange.current.style.background = `linear-gradient(to right, #1ed760 ${0}%, #4d4d4d ${0}%)`;
    durationRange.current.value = 0;

    setMasterSongId((prv) => {
      if (prv === songData.length - 1) {
        return 0;
      }
      return (prv = prv + 1);
    });
  }

  function backwardSong() {
    setPlayOrNot(true);
    durationRange.current.style.background = `linear-gradient(to right, #1ed760 ${0}%, #4d4d4d ${0}%)`;
    durationRange.current.value = 0;

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
      showCurrentSongTime.current.textContent = setTimeSong(currentTime);
      const per = Math.floor((currentTime / durationOfSong) * 100);
      // console.log("perchantage : ", per);
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
    durationRange.current.style.background = `linear-gradient(to right, #1ed760 ${e.target.value}%, #4d4d4d ${e.target.value}%)`;
  }

  function setTimeSong(duration) {
    if (duration) {
      let minutes = duration / 60;
      let seconds = ((minutes.toFixed(2) % 1) * 60).toFixed(0);
      let time = `${Math.floor(minutes)}:${formatNumber(seconds)} `;
      return time;
    }
    return "00:00";
  }

  function formatNumber(number) {
    if (number < 10) return `0${number}`;
    return `${number}`;
  }

  setTimeSong();

  return (
    <div
      style={{
        background: `${window.innerWidth < 845 ? songBgColors[masterSongId].color : ""}`,
      }}
      className="fixed bottom-0 left-0 z-10 flex max-h-[72px] w-full justify-between gap-2 bg-black text-white transition-all duration-1000 max-[470px]:min-h-[90px] max-[470px]:items-start"
    >
      {/* master cover and songName */}
      <div className="ml-4 flex w-full max-w-[200px] items-center gap-4 max-[470px]:m-0">
        <div className="h-[60px] max-w-[60px] overflow-hidden p-1">
          <img
            className="w-full rounded-xl max-[700px]:rounded-md"
            src={songData[masterSongId].coverPath}
            // src={CoverImg}
            alt="master-song-cover"
          />
        </div>
        <span className="font-bold max-[470px]:text-[12px]">
          {songData[masterSongId].songName}
        </span>
      </div>

      {/* MASTER CONTROL FOR SONG */}
      <div className="flex min-w-[500px]  flex-col items-center justify-center gap-1 py-4 max-[845px]:min-w-[300px] max-[650px]:min-w-[200px] max-[650px]:max-w-[250px] max-[375px]:min-w-[150px]">
        <div className="flex w-full justify-center gap-[1.5rem]">
          {/* BACKWARD SONG */}
          <img
            onClick={() => {
              backwardSong();
            }}
            className="w-[17px] cursor-pointer invert-[55%] transition-all duration-200 hover:invert"
            src={`/assets/asset 131.svg`}
            alt="left-song-btn"
          />

          {/* MAIN MASTER PLAY OR PAUSE BTN  */}
          <div
            onClick={() => {
              setPlayOrNot(!playOrNot);
              if (firstPlay) setCurrentSongId(masterSongId);
              setFirstPlay(true);
            }}
            className="rounded-full bg-white transition-transform   hover:scale-105"
          >
            <div className="max-w-[30px] cursor-pointer p-2">
              <img
                className="w-full"
                src={playOrNot ? `/assets/pause.svg` : `/assets/play.svg`}
                alt="playOrPauseImg"
              />
            </div>
          </div>

          {/* FORWARD SONG */}
          <img
            onClick={() => {
              forwardSong();
            }}
            className="w-[17px] cursor-pointer invert-[55%] transition-all duration-200 hover:invert"
            src={`/assets/asset 133.svg`}
            alt="right-song-btn"
          />
        </div>

        {/* SONG DURATION CONTROL */}
        <div className="song-duration flex  w-[100%] items-center justify-center gap-4">
          <span ref={showCurrentSongTime} className="text-sm text-textSubdued">
            {" "}
            00:00
          </span>
          <input
            ref={durationRange}
            onChange={setDurationOfSong}
            className="w-[100%]"
            type="range"
            min="0"
            max="100"
            step="1"
            name="songRange"
            id="songRange"
            defaultValue={0}
          />
          <span className="text-sm text-textSubdued">
            {setTimeSong(audio.duration)}
          </span>
        </div>
      </div>

      {/* MASTER SONG VOLUME CONTROL */}
      <div className="mr-4 flex items-center justify-center gap-2 max-[650px]:max-w-[50px] max-[470px]:hidden">
        <img
          className="max-w-[15px] invert"
          src={`/assets/asset 138.svg`}
          alt=""
        />
        <input
          onChange={(e) => {
            audio.volume = e.target.value / 100;
            e.target.style.background = `linear-gradient(to right, #1ed760 ${e.target.value}%, #4d4d4d ${e.target.value}%)`;
          }}
          className="max-w-[80px]"
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
