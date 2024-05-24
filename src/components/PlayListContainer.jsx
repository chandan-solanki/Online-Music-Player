import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import HeaderPlaylist from "./HeaderPlaylist";
import SelectPlayListContainer from "./SelectPlayListContainer";
import PlayListModal from "./PlayListModal";
import { useParams } from "react-router-dom";
import { useAudioContext } from "../hooks/useAudioContext";
import SelectedPlayListSongList from "./SelectedPlayListSongList";

export default function PlayListContainer() {
  const navRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const [plSongs, setPlSongs] = useState([]);

  const {
    10: playListData,
    11: setPlayListData,
    12: editData,
    13: SetEditData,
    14: editId,
    15: setEditId,
  } = useAudioContext();

  //for play list song add

  const { plid } = useParams();

  // console.log("playListData"playListData)


  // console.log(plSongs);
  // if the url has plid

  useEffect(() => {
    if (editData && editId && plSongs.length > 0) {
      setPlayListData((prv) => {
        return prv.map((playList) => {
          if (playList.plid === editData.plid) {
            return {
              plid: editData.plid,
              plname: editData.plname,
              pldescription: editData.pldescription,
              plsongs: plSongs,
            };
          } else return playList;
        });
      });
    }
  }, [plSongs]);

  useEffect(() => {
    setEditId(plid);
    setPlSongs([]);
  }, [plid, editId]);

  useEffect(() => {
    playListData.map((playlist) => {
      if (playlist.plid === editId) {
        SetEditData(playlist);
        setPlSongs(playlist["plsongs"]);
      }
    });
  }, [editId]);



  return (
    <div
      onScroll={(e) => {
        navRef.current.style.backgroundColor = "#212121";
      }}
      className="set-height max-[650px]:mx-0 mr-3 h-dvh overflow-y-auto rounded-xl bg-primary text-white"
    >
      <NavBar navRef={navRef} />

      <div className="fit-container">
        <HeaderPlaylist
          editData={editData}
          SetEditData={SetEditData}
          setOpenModal={setOpenModal}
        />

        {plSongs.length > 0 && (
          <SelectedPlayListSongList setPlSongs={setPlSongs} plSongs={plSongs} />
        )}

        <SelectPlayListContainer setPlSongs={setPlSongs} />
        {openModal && (
          <PlayListModal
            setEditId={setEditId}
            editData={editData}
            SetEditData={SetEditData}
            setPlSongs={setPlSongs}
            plSongs={plSongs}
            setPlayListData={setPlayListData}
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </div>
  );
}
