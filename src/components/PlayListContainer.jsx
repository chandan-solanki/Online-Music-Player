import React, { useRef, useState } from "react";
import NavBar from "./NavBar";

import HeaderPlaylist from "./HeaderPlaylist";
import SelectPlayListContainer from "./SelectPlayListContainer";
import PlayListModal from "./PlayListModal";

export default function PlayListContainer() {
  const navRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      onScroll={(e) => {
        console.log(navRef.current);
        navRef.current.style.backgroundColor = "#212121";
      }}
      className="mr-3 h-dvh overflow-y-auto rounded-xl bg-primary text-white"
    >
      <NavBar navRef={navRef} />

      <div className="fit-container">
        <HeaderPlaylist setOpenModal={setOpenModal} />
        <SelectPlayListContainer />
        {openModal && <PlayListModal setOpenModal={setOpenModal}/>}
      </div>
    </div>
  );
}
