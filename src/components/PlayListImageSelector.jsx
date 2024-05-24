import React, { useState } from "react";
import MusicIcon from "/assets/musicIcon.svg";
import PenEdit from "/assets/penEdit.svg";

export default function PlayListImageSelector() {


  return (
    <div
      className="flex min-h-[180px] min-w-[180px] cursor-pointer flex-col items-center justify-center max-[845px]:min-h-[120px] max-[845px]:min-w-[120px] rounded-lg bg-[#282828]"
      id="playListSelectImg"
    >
      <div className="max-w-[70px]">
        <img
          className="w-full invert"
          src={MusicIcon}
          alt="edit-img"
        />
      </div>
    </div>
  );
}
