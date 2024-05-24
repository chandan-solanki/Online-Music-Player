import React from "react";
// import SearchImg from "../assets/search.svg";

export default function SearchSongInput({ setSearchInput }) {
  return (
    <div className="absolute left-0 top-0 flex min-w-[400px] items-center justify-center overflow-hidden rounded-full bg-[#242424] max-[845px]:min-w-[300px] max-[700px]:left-10 max-[700px]:top-[50%] max-[700px]:-translate-y-[50%] max-[700px]:rounded-lg max-[375px]:left-7 max-[375px]:min-w-[240px]">
      <div className="absolute  left-6 top-[50%] max-w-[20px] translate-y-[-50%] max-[375px]:left-2">
        <img
          className="w-full invert-[60%]"
          src={`./assets/search.svg`}
          alt=""
        />
      </div>

      <input
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full max-[700px]:rounded-lg rounded-full  bg-[#2a2a2a] py-3 pl-14 text-white outline-none focus:border-2 max-[700px]:py-2  max-[700px]:text-sm max-[375px]:pl-10"
        type="text"
        placeholder="What do you want to play ?"
        name="search-song"
        id="search-song"
      />
    </div>
  );
}
