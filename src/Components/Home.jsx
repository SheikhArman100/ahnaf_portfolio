import React from "react";

import HomeImage from "../assets/home.jpg";

function Home() {
  return (
    <div
      name="home"
      className="flex h-full w-screen flex-col items-center   pt-[4.5rem] md:pt-[2rem]"
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
      <div className=" mt-4 border border-accentColor  p-2 md:mx-8">
        <img src={HomeImage} alt="" />
      </div>
    </div>
  );
}

export default Home;
