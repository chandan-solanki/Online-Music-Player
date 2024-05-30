import React, { useEffect } from "react";
// import ArrowLeft from "./assets/arrow-left.svg";
// import ArrowRight from "./assets/arrow-right.svg";
import SearchSongInput from "./SearchSongInput";
import { useAudioContext } from "../hooks/useAudioContext";
export default function NavBar({ navRef, isSearchSection, setSearchInput }) {
  const { 16: navBarOpen, 17: setNavBarOpen } = useAudioContext();

  return (
    <nav
      ref={navRef}
      className="fit-container h-fit transition-colors duration-500 sticky left-0 top-0 z-50 flex w-full justify-between bg-primary py-4 text-white "
    >
      <div className="relative flex items-center justify-start">
        {!isSearchSection && (
          <div className="flex justify-between gap-2 max-[700px]:hidden">
            <img
              src={`/assets/arrow-left.svg`}
              className="flex max-w-10 cursor-pointer items-center justify-center rounded-full  p-[7px] invert"
              alt="arrow-left"
            />
            <img
              src={`/assets/arrow-right.svg`}
              className="flex max-w-10 cursor-pointer items-center justify-center rounded-full   p-[7px] invert"
              alt="arrow-right"
            />
          </div>
        )}

        {/* HAMBURGER MENU  */}
        <div
          onClick={(e) => {
            setNavBarOpen(true);
          }}
          className="hamburger-menu hidden max-w-[25px] cursor-pointer max-[700px]:block"
        >
          <img
            id="hamburger"
            className="w-full invert"
            src="/assets/menu-burger.svg"
            alt=""
          />
        </div>

        {isSearchSection && <SearchSongInput setSearchInput={setSearchInput} />}
      </div>

      {!isSearchSection && (
        <div className="flex max-h-8 w-full max-w-8 cursor-pointer items-center justify-center rounded-full bg-black p-[2px] transition-transform hover:scale-110">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#19e68c] text-center">
            <span className="text-center font-semibold text-black">R</span>
          </div>
        </div>
      )}
    </nav>
  );
}
