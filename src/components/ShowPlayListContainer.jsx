import React, { useEffect, useReducer, useRef, useState } from "react";
import ContextMenu from "./ContextMenu";
import ShowPlayListItem from "./ShowPlayListItem";

export default function ShowPlayListContainer({ playListData }) {
  const [menuPositon, setMenuPosition] = useState({});
  const [menuEditId, setMenuEditId] = useState("");
  const contextRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      //   console.log("body target : ", e.target);
      //   console.log(contextRef.current);
      // Check if the click is outside the context menu
      if (contextRef.current && !contextRef.current.contains(e.target)) {
        setMenuPosition({}); // Close the context menu
      }
    }

    // Attach event listener when component mounts
    document.body.addEventListener("click", handleClickOutside);

    // Detach event listener when component unmounts
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div onClick={(e) => {}} className=" h-full overflow-x-hidden overflow-y-scroll pb-20 pt-5">
      <ContextMenu
        contextRef={contextRef}
        menuPositon={menuPositon}
        setMenuPosition={setMenuPosition}
        menuEditId={menuEditId}
        setMenuEditId={setMenuEditId}
      />

      {playListData.map((playList) => {
        return (
          <ShowPlayListItem
            key={playList.plid}
            playList={playList}
            setMenuEditId={setMenuEditId}
            setMenuPosition={setMenuPosition}
          />
        );
      })}
    </div>
  );
}
