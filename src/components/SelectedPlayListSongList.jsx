import React from "react";
import SelectedPlayListItem from "./SelectedPlayListItem";

export default function SelectedPlayListSongList({ plSongs }) {
  return (
    <div className="b mt-5 h-auto w-full">
      <div className=" ">
        <h1 className=" w-full text-center text-xl font-semibold">
          Your Play List Songs
        </h1>
        {/* <span className="text-textSubdued pl-3 font-semibold">#Title</span>
        <span className="text-textSubdued pl-3 font-semibold">Album</span>
        <span className="text-textSubdued pl-3 font-semibold">Date add</span>
        <span className="text-textSubdued pl-3 font-semibold">Duration</span> */}
      </div>
      <div className="my-2 h-[1px] w-full bg-white"></div>

      <div className="mt-4 flex flex-col items-start justify-center">
        {plSongs.map((plsong, i) => (
          <SelectedPlayListItem plsong={plsong} key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
