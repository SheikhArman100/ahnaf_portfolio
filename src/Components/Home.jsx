import React from "react";

import flag from "../assets/flag2.jpg";
import HomeImage from "../assets/home.jpg";
import logo from "../assets/logo.png";
import image3 from "../assets/sritiImage.jpg";

function Home() {
  return (
    <div
      name="home"
      className="flex h-full w-screen flex-col items-center  pt-[4.5rem] text-center md:pt-[2rem]"
    >
      <div>
        <div className="flex items-center justify-center gap-x-1 sm:flex-col ">
          <img src={logo} className="h-20 md:h-16" alt="" />
          <h2 className="text-7xl font-bold tracking-wide   md:text-5xl ">
            Muhammad Musa
          </h2>
        </div>
        <div className="text-center font-secondText text-[0.9rem] font-normal text-gray-700  md:text-xs">
          <p>Secretary (Rtd), Government of Bangladesh</p>
          <p>
            President, BCS Freedom-Fighter Officers and Employees Welfare
            Association of Bangladesh
          </p>
          <p>TV personality and Columnist</p>
        </div>
      </div>
      <div className="mx-2 flex items-center justify-center gap-x-4">
        <div className="mt-4 flex border border-accentColor p-2  md:mx-8 md:hidden">
          <img className="aspect-[1.5/1] h-[16rem]  " src={flag} alt="" />
        </div>
        <div className=" mt-4 flex border border-accentColor  p-2 md:mx-8">
          <img
            className="aspect-[1.5/1] h-[20rem] md:h-[16rem]"
            src={HomeImage}
            alt=""
          />
        </div>
        <div className="mt-4 flex border border-accentColor p-2  md:mx-8 md:hidden">
          <img className="aspect-[1.5/1] h-[16rem] " src={image3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
