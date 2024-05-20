import React, { useState } from "react";

import PlayListImageSelector from "./PlayListImageSelector";

export default function HeaderPlaylist({ setOpenModal }) {
  return (
    <div onClick={()=> setOpenModal(true)} className=" cursor-pointer flex min-h-[200px] w-full items-center gap-10 text-white">
      <PlayListImageSelector />

      <div className="flex flex-col items-start justify-center gap-3">
        <span>Playlist</span>
        <h1 className="text-[4.3rem] font-bold">My Playlist</h1>
        <span>user name</span>
      </div>
    </div>
  );
}
