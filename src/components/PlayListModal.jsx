import React, { useEffect, useState } from "react";
// import CloseImg from "./assets/asset 144.svg";
import PlayListImageSelector from "./PlayListImageSelector";
import { createPortal } from "react-dom";

export default function PlayListModal({
  setOpenModal,
  setPlSongs,
  plSongs,
  editData,
  setPlayListData,
  SetEditData,
  setEditId,
}) {
  const [playlistname, setPlayListName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editData) {
      setPlayListName(editData.plname);
      setDescription(editData.pldescription);
    }
  }, []);

  function onChange(e) {
    if (e.target.name === "playlistname") setPlayListName(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
  }

  return createPortal(
    <div className="absolute left-[50%] top-[50%] z-50 flex h-dvh w-dvw -translate-x-[50%] -translate-y-[50%] items-center  justify-center bg-[#000000b3] text-white">
      <div className="flex h-fit w-full max-w-[500px] flex-col gap-4 rounded-md bg-elevatedHighlight p-[24px] max-[700px]:max-w-[450px]  max-[470px]:max-w-[370px]">
        <div className="flex items-center justify-between gap-3">
          <div className="text-[1.5rem] font-bold">Edit Details</div>
          <div
            onClick={() => setOpenModal(false)}
            className=" min-w-[20px] rounded-full hover:bg-[#3E3E3E] "
          >
            <img
              className="w-full p-2 invert"
              src="/assets/asset 144.svg"
              alt="close-icon"
            />
          </div>
        </div>
        <div className="flex w-full justify-between gap-5">
          <PlayListImageSelector />
          <div className="relative flex w-full flex-col items-start gap-4  text-[14px]  font-semibold ">
            <input
              onChange={onChange}
              className="relative w-full rounded-md border-[1px] border-[#3E3E3E] bg-[#3E3E3E]  p-[8px] outline-none focus:border-gray-400 "
              type="text"
              name="playlistname"
              id="playlistname"
              value={playlistname}
              placeholder="Add a Name"
            />

            <textarea
              onChange={onChange}
              className="h-full w-full resize-none rounded-md border-[1px] border-[#3E3E3E] bg-[#3E3E3E]  p-[8px] outline-none focus:border-gray-400 "
              placeholder="Add an optional description"
              name="description"
              id="description"
              value={description}
            ></textarea>
          </div>
        </div>

        {/* SAVE BUTTON  */}
        <div className="relative min-h-[50px] w-full">
          <button
            onClick={() => {
              if (playlistname.length === 0) {
                alert("enter the name !");
                return;
              }
              //if the editdata is present
              if (editData) {
                setPlayListData((prv) => {
                  return prv.map((playList) => {
                    if (playList.plid === editData.plid) {
                      return {
                        plid: editData.plid,
                        plname: playlistname,
                        pldescription: description,
                        plsongs: plSongs,
                      };
                    } else return playList;
                  });
                });
              } else {
                setPlayListData((prv) => {
                  return [
                    {
                      plid: crypto.randomUUID(),
                      plname: playlistname,
                      pldescription: description,
                      plsongs: plSongs,
                    },
                    ...prv,
                  ];
                });
              }

              setPlSongs([]);
              setOpenModal(false);
              setEditId(null);
            }}
            className="absolute right-0  min-w-[80px] rounded-xl bg-white p-3 font-semibold text-black transition-all hover:scale-110"
          >
            Save
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
