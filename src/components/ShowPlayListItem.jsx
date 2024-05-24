import React, { useState } from "react";
// import MusicIcon from "../assets/musicIcon.svg";
import { NavLink } from "react-router-dom";
import ContextMenu from "./ContextMenu";
import { useAudioContext } from "../hooks/useAudioContext";

export default function ShowPlayListItem({ playList , setMenuPosition , setMenuEditId}) {
  const { plid, pldescription, plname } = playList;

  const {
    17: setNavBarOpen,
  } = useAudioContext();

  function handleContextMenu(e) {
    e.preventDefault();
    setMenuEditId(plid);
    setMenuPosition({ left: e.clientX + 3, top: e.clientY + 3 });
  }

  return (
    <div
      onContextMenu={handleContextMenu}
      className="mx-2  my-2  w-[95%] cursor-pointer justify-start self-center overflow-hidden rounded-lg text-white transition-colors duration-75 hover:bg-elevatedHighlight"
    >
      <NavLink
      onClick={()=> setNavBarOpen(false)}
        className={({ isActive }) => {
          if (isActive) return `active block w-auto bg-elevatedHighlight`;
        }}
        to={`playlist/${plid}`}
      >
        <div className="flex w-full gap-4 p-2 ">
          <div
            id="showPlayListImg"
            className="max-w-[45px] max-[700px]:max-w-[35px] max-[700px]:max-h-[35px]   overflow-hidden rounded-lg border-[2px] border-elevatedHighlight p-1 transition-all  "
          >
            <img
              className="w-full invert"
              src={`/assets/musicIcon.svg`}
              alt="music-img"
            />
          </div>

          <div>
            <div className="text-[16px] max-[700px]:text-[14px] font-semibold">{plname}</div>
            <div className="text-[12px] ">Play List</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
