import React from "react";
import { useAudioContext } from "../hooks/useAudioContext";

export default function ContextMenu({
  menuPositon,
  setMenuPosition,
  contextRef,
  menuEditId,
  setMenuEditId,
}) {
  // console.log(menuPositon);

  if (!menuPositon.left || !menuPositon.top) return;

  const {
    10: playListData,
    11: setPlayListData,
    12: editData,
    13: SetEditData,
    14: editId,
    15: setEditId,
  } = useAudioContext();

  return (
    <div
      ref={contextRef}
      style={menuPositon}
      className="shadow-base   item-start max-h-auto  absolute z-50 flex min-w-[150px] text-center flex-col justify-start gap-1 rounded-md bg-[#282828]  text-white"
    >

        <div className="cursor-pointer rounded-md p-2  hover:bg-[#3E3E3E]">Edit</div>
      <div
        onClick={(e) => {
          // console.log("context delete click", menuEditId);

          if (menuEditId) {
            setPlayListData((prv) => {
              const newPlayList = prv.filter((playList) => {
                if (playList.plid !== menuEditId) return playList;
              });

              return newPlayList;
            });
          }

          setMenuEditId("");
          setMenuPosition({});
        }}
        className="cursor-pointer rounded-md p-2  hover:bg-[#3E3E3E]"
      >
        Delete
      </div>
    </div>
  );
}
