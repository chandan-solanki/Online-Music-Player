import React from "react";
import SearchImg from "../assets/search.svg";

export default function SearchSongInput({ setSearchInput }) {
  return (
    <div className="absolute left-7 ml-20 flex min-w-[400px] items-center justify-center overflow-hidden rounded-full bg-[#242424]">
      <div className="absolute left-6 top-[50%] max-w-[20px] translate-y-[-50%]">
        <img className="w-full invert-[60%]" src={SearchImg} alt="" />
      </div>
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full rounded-full  bg-[#2a2a2a]  p-3  pl-14 text-white outline-none focus:border-2"
        type="text"
        placeholder="What do you want to play ?"
        name="search-song"
        id="search-song"
      />
    </div>
  );
}
