import React from "react";
// import MusicIcon from "../assets/musicIcon.svg";
import { NavLink } from "react-router-dom";

export default function ShowPlayListItem({ playList }) {
  const { plid, pldescription, plname } = playList;

  return (
    <div className="mx-2 my-2   w-[95%] cursor-pointer justify-start self-center overflow-hidden rounded-lg text-white transition-colors duration-75 hover:bg-elevatedHighlight">
      <NavLink
        className={({ isActive }) => {
          if (isActive) return `block w-auto bg-elevatedHighlight`;
        }}
        to={`playlist/${plid}`}
      >
        <div className="flex w-full gap-4 p-2 ">
          <div
            id="showPlayListImg"
            className="max-w-[45px] overflow-hidden rounded-lg border-[1px] p-1  "
          >
            <img
              className="w-full invert"
              src={`/assets/musicIcon.svg`}
              alt="music-img"
            />
          </div>

          <div>
            <div className="text-[16px] font-semibold">{plname}</div>
            <div className="text-[12px] ">Play List</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
