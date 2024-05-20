import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "../assets/home.svg";
import HomeActive from "../assets/homeactive.svg";
import Search from "../assets/search.svg";
import SearchActive from "../assets/searchactive.svg";
import LibraryImg from "../assets/asset 121.svg";
import AddIcon from "../assets/asset 122.svg";

export default function LeftContainer({}) {
  console.log("nav rendering ...");

  return (
    <div className="ml-1 h-dvh min-w-[350px] overflow-hidden rounded-xl text-white  max-[1200px]:min-w-[250px] max-[1000px]:min-w-[200px]">
      {/* FOR NAVIGATION  */}
      <div className="flex h-[150px] flex-col items-start justify-center gap-4 rounded-xl bg-primary pl-5 ">
        <div className="max-w-[200px]">
          <NavLink to="/" className="">
            {({ isActive }) => (
              <>
                <div className="flex max-w-[100px] items-center gap-3">
                  <div className="max-h-[30px] max-w-[30px] invert">
                    <img
                      className="w-full"
                      src={isActive ? HomeActive : Home}
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
                      src={isActive ? SearchActive : Search}
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
      <div className="mt-5 h-[100%] rounded-xl bg-primary text-white">
        <div className="flex items-center justify-between ml-5 pt-4">
          <div className="flex min-w-[150px] items-center justify-center gap-4 invert-[60%] transition-all duration-200 hover:invert">
            <img
              className="max-h-[30px] w-full max-w-[30px] "
              src={LibraryImg}
              alt="play-list-Icon"
            />
            <span className="w-full text-sm font-semibold text-white invert">
              Your Library
            </span>
          </div>
          <div className="hover:bg-elevatedHighlight mr-4  group min-w-[20px] cursor-pointer rounded-full p-2 transition-all ">
            <NavLink to="/playlist" className="w-full">
              <img
                className=" w-full min-w-[18px] invert-[60%] transition-all group-hover:invert"
                src={AddIcon}
                alt="Add-list-Icon"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
