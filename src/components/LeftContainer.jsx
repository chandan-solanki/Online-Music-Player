import { NavLink } from "react-router-dom";
// import Home from "../assets/home.svg";
// import HomeActive from "../assets/homeactive.svg";
// import Search from "../assets/search.svg";
// import SearchActive from "../assets/searchactive.svg";
// import LibraryImg from "../assets/asset 121.svg";
// import AddIcon from "../assets/asset 122.svg";
import ShowPlayListItem from "./ShowPlayListItem";

import { useAudioContext } from "../hooks/useAudioContext";

export default function LeftContainer({}) {
  const {
    10: playListData,
    11: setPlayListData,
    12: editData,
    13: SetEditData,
    14: editId,
    15: setEditId,
  } = useAudioContext();

  return (
    <div className="set-height ml-1 gap-3 flex min-w-[350px] flex-col justify-start overflow-hidden rounded-xl text-white   max-[1200px]:min-w-[250px] max-[1000px]:min-w-[200px]">
      {/* FOR NAVIGATION  */}
      <div className="flex min-h-[150px] flex-col items-start justify-center gap-4 rounded-xl bg-primary pl-5 ">
        <div className="max-w-[200px]">
          <NavLink to="/" className="">
            {({ isActive }) => (
              <>
                <div className="flex max-w-[100px] items-center gap-3">
                  <div className="max-h-[30px] max-w-[30px] invert">
                    <img
                      className="w-full"
                      src={
                        isActive ? `/assets/homeactive.svg` : `/assets/home.svg`
                      }
                      alt="nav-link-icon"
                    />
                  </div>
                  <span>Home</span>
                </div>
              </>
            )}
          </NavLink>
        </div>

        <div className="max-w-[200px]">
          <NavLink to="/search" className="">
            {({ isActive }) => (
              <>
                <div className="flex max-w-[100px] items-center justify-center gap-3">
                  <div className="max-h-[30px] max-w-[30px] invert">
                    <img
                      className="w-full"
                      src={
                        isActive
                          ? `/assets/searchactive.svg`
                          : `/assets/search.svg`
                      }
                      alt="nav-link-icon"
                    />
                  </div>
                  <span>Search</span>
                </div>
              </>
            )}
          </NavLink>
        </div>
      </div>

      {/* PLAYLIST SECTION */}
      <div className="set-container h-dvh  rounded-xl bg-primary text-white">
        <div className="ml-5 flex items-center justify-between pt-4">
          <div className="flex min-w-[150px] items-center justify-center gap-4 invert-[60%] transition-all duration-200 hover:invert">
            <img
              className="max-h-[30px] w-full max-w-[30px] "
              src={`/assets/asset 121.svg`}
              alt="play-list-Icon"
            />
            <span className="w-full text-sm font-semibold text-white invert">
              Your Library
            </span>
          </div>

          {/* PLUS ICON  */}
          <NavLink
            to="/playlist"
            onClick={() => {
              setEditId(null);
              SetEditData(null);
            }}
            className="group mr-4 min-w-[20px] cursor-pointer rounded-full p-2   transition-all hover:bg-elevatedHighlight"
          >
            <div className="">
              <img
                className=" w-full min-w-[18px] invert-[60%] transition-all group-hover:invert"
                src={`/assets/asset 122.svg`}
                alt="Add-list-Icon"
              />
            </div>
          </NavLink>
        </div>

        <div className="overflow-y-scroll h-full pb-20 pt-5">
          {playListData.map((playList) => {
            return <ShowPlayListItem key={playList.plid} playList={playList} />;
          })}
        </div>
      </div>
    </div>
  );
}
