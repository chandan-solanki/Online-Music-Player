import React, { useState } from "react";
import NavBar from "./NavBar";

import SearchList from "./SearchList";

export default function SearchContainer() {
  const [searchInput, setSearchInput] = useState("");
  // console.log("searchInput : ", searchInput);
  return (
    <div className="mr-3 max-[700px]:mx-0 set-height h-dvh overflow-y-auto pb-24 rounded-xl bg-primary">
      <NavBar isSearchSection={true} setSearchInput={setSearchInput} />
      <SearchList searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  );
}
