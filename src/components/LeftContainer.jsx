import { NavLink } from "react-router-dom";
import { useAudioContext } from "../hooks/useAudioContext";
import ShowPlayListContainer from "./ShowPlayListContainer";
import { useEffect, useRef, useState } from "react";

export default function LeftContainer({}) {
  const {
    10: playListData,
    11: setPlayListData,
    12: editData,
    13: SetEditData,
    14: editId,
    15: setEditId,
    16: navBarOpen,
    17: setNavBarOpen,
  } = useAudioContext();

  const leftContainerRef = useRef(null);

  // const [navBarOpen, setNavBarOpen] = useState(true);

  useEffect(() => {
    function handleEventListner(e) {
      if (
        !leftContainerRef.current.contains(e.target) &&
        e.target.id !== "hamburger"
      ) {
        setNavBarOpen(false);
      }
    }

    document.body.addEventListener("click", handleEventListner);

    return () => document.body.removeEventListener("click", handleEventListner);
  }, []);

  return (
    <div
      ref={leftContainerRef}
      className={` ${navBarOpen ? "left-0" : "left-[-90%]"} left-container set-height ml-1 flex min-w-[350px] flex-col justify-start gap-3 overflow-hidden rounded-xl text-white transition-all duration-300  max-[1200px]:min-w-[250px]  max-[1000px]:min-w-[245px] max-[845px]:min-w-[220px] max-[700px]:m-0`}
    >
      {/* FOR NAVIGATION  */}
      <div className="relative flex min-h-[150px] flex-col items-start justify-center gap-4 rounded-xl bg-primary pl-5 max-[700px]:rounded-none ">
        <div
          onClick={(e) => setNavBarOpen(false)}
          className="absolute right-2 top-3 hidden max-w-[25px] cursor-pointer max-[700px]:block"
        >
          <img
            className="w-full invert"
            src="/assets/close.png"
            alt="close-img"
          />
        </div>

        <div className="max-w-[200px]">
          <NavLink onClick={(e) => setNavBarOpen(false)} to="/" className="">
            {({ isActive }) => (
              <>
                <div className="flex max-w-[100px] items-center gap-3">
                  <div className="max-h-[30px] max-w-[30px] invert max-[700px]:max-h-[25px] max-[700px]:max-w-[25px]">
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
          <NavLink
            onClick={(e) => setNavBarOpen(false)}
            to="/search"
            className=""
          >
            {({ isActive }) => (
              <>
                <div className="flex max-w-[100px] items-center justify-center gap-3">
                  <div className="max-h-[30px] max-w-[30px] invert max-[700px]:max-h-[25px] max-[700px]:max-w-[25px]">
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
      <div className="set-container h-dvh rounded-xl  bg-primary text-white max-[700px]:rounded-none">
        <div className="ml-5 flex items-center justify-between pt-4">
          <div className="flex min-w-[150px] items-center justify-center gap-4 invert-[60%] transition-all duration-200 hover:invert">
            <img
              className="max-h-[30px] w-full max-w-[30px] max-[700px]:max-h-[25px] max-[700px]:max-w-[25px]"
              src={`/assets/asset 121.svg`}
              alt="play-list-Icon"
            />
            <span className="w-full font-semibold text-white invert">
              Your Library
            </span>
          </div>

          {/* PLUS ICON  */}
          <NavLink
            to="/playlist"
            onClick={() => {
              setNavBarOpen(false);
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

        <ShowPlayListContainer playListData={playListData} />
      </div>
    </div>
  );
}
