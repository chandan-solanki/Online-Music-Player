import React from "react";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import SearchSongInput from "./SearchSongInput";
export default function NavBar({ navRef , isSearchSection, setSearchInput }) {
  return (
    <nav
    ref={navRef}
     className="sticky top-0 z-50 w-full left-0 fit-container flex justify-between bg-primary py-4 text-white ">
      <div className="relative flex items-center justify-start">
        <div className="flex justify-between gap-2">
          <img
            src={ArrowLeft}
            className="flex max-w-10 cursor-pointer items-center justify-center rounded-full  p-[7px] invert"
            alt="arrow-left"
          />
          <img
            src={ArrowRight}
            className="flex max-w-10 cursor-pointer items-center justify-center rounded-full   p-[7px] invert"
            alt="arrow-right"
          />
        </div>

        {isSearchSection && <SearchSongInput setSearchInput={setSearchInput} />}
      </div>

      <div className="flex max-h-8 w-full max-w-8 cursor-pointer items-center justify-center rounded-full bg-black p-[2px] transition-transform hover:scale-110">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#19e68c] text-center">
          <span className="text-center font-semibold text-black">R</span>
        </div>
      </div>
    </nav>
  );
}
