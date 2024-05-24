import React from "react";

export default function QueryResultItem({ song, setPlSongs }) {
  const { id, songName, coverPath, filePath } = song;

  return (
    <div className="flex max-[375px]:p-2 w-full cursor-pointer items-center justify-between rounded-md px-4 py-3 hover:bg-elevatedHighlight">
      <div className="flex max-w-fit items-center justify-center gap-4  ">
        <div className="max-w-[60px] overflow-hidden rounded-md">
          <img className="w-full" src={coverPath} alt="song-img" />
        </div>
        <div className="text-lg max-[700px]:text-[12px] font-semibold">{songName}</div>
      </div>

      <div>
        <button
          onClick={() => {
            setPlSongs((prv) => {
              return [{ id, songName, coverPath, filePath }, ...prv];
            });
          }}
          className="max-[375px]:min-w-[70px] max-[375px]:rounded-lg min-w-[90px] rounded-full border-2 border-[#727272] py-2 font-semibold outline-none hover:border-white"
        >
          Add
        </button>
      </div>
    </div>
  );
}
