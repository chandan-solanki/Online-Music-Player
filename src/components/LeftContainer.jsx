import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "../assets/home.svg";
import HomeActive from "../assets/homeactive.svg";
import Search from "../assets/search.svg";
import SearchActive from "../assets/searchactive.svg";

export default function LeftContainer({}) {
  console.log("nav rendering ...");

  return (
    <div className="ml-1 h-dvh min-w-[350px] overflow-hidden rounded-xl text-white  max-[1200px]:min-w-[250px] max-[1000px]:min-w-[200px]">
      <div className="flex h-[150px] flex-col items-start justify-center gap-4 rounded-xl bg-primary pl-10 text-center">
        <div className="w-[200px]">
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

        <div className="w-[200px]">
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
      <div className="mt-5 h-[100%] min-w-[350px] rounded-xl bg-primary text-white"></div>
    </div>
  );
}
