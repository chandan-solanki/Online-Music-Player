import React, { useState } from "react";
import MusicIcon from "/assets/musicIcon.svg";
import PenEdit from "/assets/penEdit.svg";

export default function PlayListImageSelector() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      onMouseOver={(e) => {
        console.log("mouse over in icon");
        setMouseOver(true);
      }}
      onMouseLeave={(e) => {
        console.log("mouse leave the icon");
        setMouseOver(false);
      }}
      className="flex min-h-[180px] min-w-[180px] cursor-pointer flex-col items-center justify-center rounded-lg bg-[#282828]"
      id="playListSelectImg"
    >
      <div className="max-w-[70px]">
        <img
          className="w-full invert"
          src={mouseOver ? PenEdit : MusicIcon}
          alt="edit-img"
        />
      </div>
      {mouseOver ? <div>Choose photo</div> : ""}
    </div>
  );
}
