import React from "react";

import flag from "../assets/flag.jpg";
import HomeImage from "../assets/home.jpg";
import image3 from "../assets/image2.jpg";

function Home() {
  return (
    <div
      name="home"
      className="flex h-screen w-screen flex-col items-center pt-[4.5rem] text-center md:pt-[2rem]"
    >
      <div>
        <h2 className="text-center text-7xl font-bold tracking-wide md:text-5xl">
          Muhammad Musa
        </h2>
        <div className="text-center font-secondText text-[0.9rem] font-normal text-gray-700 md:text-xs">
          <p>Secretary (Rtd), Government of Bangladesh</p>
          <p>
            President, BCS Freedom-Fighter Officers and Employees Welfare
            Association of Bangladesh
          </p>
          <p>TV personality and Columnist</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <div className="mt-4 flex border border-accentColor p-2  md:mx-8 md:hidden">
          <img className="h-[16rem] w-[20rem]" src={flag} alt="" />
        </div>
        <div className=" mt-4 flex border border-accentColor  p-2 md:mx-8">
          <img className="h-[20rem]" src={HomeImage} alt="" />
        </div>
        <div className="mt-4 flex border border-accentColor p-2  md:mx-8 md:hidden">
          <img className="h-[16rem] w-[20rem]" src={image3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
