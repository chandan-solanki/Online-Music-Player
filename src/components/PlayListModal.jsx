import React from "react";
import CloseImg from "../assets/asset 144.svg";
import PlayListImageSelector from "./PlayListImageSelector";
import { createPortal } from "react-dom";

export default function PlayListModal({setOpenModal}) {

  console.log(createPortal);
  return createPortal(
    <div className="absolute left-[50%] top-[50%] z-50 flex h-dvh w-dvw -translate-x-[50%] -translate-y-[50%] items-center  justify-center bg-[#000000b3] text-white">
      <div className="flex h-fit min-w-[524px] flex-col gap-4 rounded-md bg-elevatedHighlight p-[24px] ">
        <div className="flex items-center justify-between">
          <div className="text-[1.5rem] font-bold">Edit Details</div>
          <div onClick={() => setOpenModal(false)} className=" min-w-[20px] rounded-full hover:bg-[#3E3E3E] ">
            <img
              className="w-full p-2 invert"
              src={CloseImg}
              alt="close-icon"
            />
          </div>
        </div>

        <div className="flex w-full justify-between">
          <PlayListImageSelector />
          <div className="relative flex min-w-[280px] flex-col items-start gap-4  text-[14px]  font-semibold ">
            <input
              className="relative w-full rounded-md border-[1px] border-[#3E3E3E] bg-[#3E3E3E]  p-[8px] outline-none focus:border-gray-400 "
              type="text"
              name="playlistname"
              id="playlistname"
              placeholder="Add a Name"
            />

            <textarea
              className="h-full w-full rounded-md border-[1px] border-[#3E3E3E] bg-[#3E3E3E]  p-[8px] outline-none focus:border-gray-400 "
              placeholder="Add an optional description"
              name=""
              id=""
            ></textarea>
          </div>
        </div>

        <div className="relative min-h-[50px] w-full">
          <button className="absolute right-0  min-w-[80px] rounded-xl bg-white p-3 font-semibold text-black transition-all hover:scale-110">
            Save
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
