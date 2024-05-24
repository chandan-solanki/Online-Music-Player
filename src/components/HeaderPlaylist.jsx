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
      className=" flex min-h-[200px] justify-start max-[845px]:justify-center max-[700px]:justify-start max-[470px]:gap-4 w-full cursor-pointer items-center gap-10 text-white"
    >
      <PlayListImageSelector />

      <div className="flex flex-col items-start justify-center gap-3">
        <span>Playlist</span>
        <h1 className="max-[845px]:text-[2.5rem] max-[290px]:text-[1.2rem] max-[470px]:text-[2rem] text-[4.3rem] font-bold">
          {editData ? `${editData.plname}` : `My PlayList`}
        </h1>
        <span> {editData ? `${editData.pldescription}` : `Description`}</span>
      </div>
    </div>
  );
}
