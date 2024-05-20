import React, { useReducer, useRef, useState } from "react";
import SearchImg from "../assets/search.svg";
import CloseImg from "../assets/asset 144.svg";
import QueryResultList from "./QueryResultList";
export default function SelectPlayListContainer() {
  const [qry, setQry] = useState("");
  const searchQryRef = useRef(null);

  console.log({ qry });

  const onChangeSearch = (e) => {
    setQry(e.target.value);
  };

  return (
    <div className="mt-16 mb-20">
      <div className="h-[2px] w-full bg-elevatedHighlight"></div>
      <div className="mt-10 flex max-w-fit flex-col items-start justify-center gap-4">
        <div className="w-full text-[1.5rem] font-semibold">
          Let's find something for your playlist
        </div>

        {/* INPUT FOR QUERY */}
        <div className="relative w-full">
          {/* SEARCH IMG */}
          <div className="absolute left-3 top-[50%] max-w-[20px]  -translate-y-[50%] invert-[70%]">
            <img className="w-full" src={SearchImg} alt="search-img" />
          </div>
          <input
            ref={searchQryRef}
            onChange={onChangeSearch}
            className="w-full rounded-md border-none bg-[#2c2c2c] px-10 py-3 text-[12px] tracking-wide   font-semibold text-[#ffffffb3] outline-none"
            type="text"
            placeholder="Search for songs "
            name="searchForPlaylist"
            id="searchForPlaylist"
          />
          {/* CLOSE IMG */}
          <div
            onClick={() => {
              setQry("");
              searchQryRef.current.value = "";
            }}
            className="absolute right-3 top-[50%] max-w-[30px] -translate-y-[50%]   cursor-pointer invert-[70%]"
          >
            <img className="w-full" src={CloseImg} alt="search-img" />
          </div>
        </div>

      </div>

      <QueryResultList qry={qry}/>
    </div>
  );
}
