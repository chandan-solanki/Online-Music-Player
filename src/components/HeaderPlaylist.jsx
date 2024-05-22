import { useAudioContext } from "../hooks/useAudioContext";
import PlayListImageSelector from "./PlayListImageSelector";
import { useParams } from "react-router-dom";

export default function HeaderPlaylist({
  setOpenModal,
  editData,
  setEditData,
}) {
  return (
    <div
      onClick={() => setOpenModal(true)}
      className=" flex min-h-[200px] w-full cursor-pointer items-center gap-10 text-white"
    >
      <PlayListImageSelector />

      <div className="flex flex-col items-start justify-center gap-3">
        <span>Playlist</span>
        <h1 className="text-[4.3rem] font-bold">
          {editData ? `${editData.plname}` : `My PlayList`}
        </h1>
        <span> {editData ? `${editData.pldescription}` : `Description`}</span>
      </div>
    </div>
  );
}
