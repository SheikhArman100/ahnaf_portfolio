/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(315deg, green 0% , red 50%, green 70%)",
      }}
      className="fixed z-20 flex h-[4rem] w-screen flex-1 items-center justify-between px-10 transition-[all_0.5s_ease]"
    >
      <div className="flex  flex-[1_1_auto] items-center  justify-center ">
        <ul className=" ml-[4rem] flex cursor-pointer  items-center   gap-x-10 font-secondText  text-xs font-semibold text-bgColor transition-[all_0.5s_ease] ">
          <li className="border-b-2 border-transparent py-2 hover:border-bgColor">
            <Link to="home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className="border-b-2 border-transparent py-2 hover:border-bgColor">
            <Link to="about" smooth duration={500}>
              Author Note
            </Link>
          </li>
          <li className="border-b-2 border-transparent py-2 hover:border-bgColor">
            <Link to="book" smooth duration={500}>
              Book Published
            </Link>
          </li>
          <li className="border-b-2 border-transparent py-2 hover:border-bgColor">
            <Link to="gallery" smooth duration={500}>
              Photo Gallery
            </Link>
          </li>
          <li className="border-b-2 border-transparent py-2 hover:border-bgColor">
            <Link to="archive" smooth duration={500}>
              1971 Archive
            </Link>
          </li>
        </ul>
      </div>

      <button
        type="button"
        className="mr-6 flex-[0_1_auto] rounded-full border border-none bg-accentColor py-2 px-4 text-base font-bold text-bgColor transition-[all_0.5s_ease] hover:border-accentColor hover:bg-bgColor hover:text-accentColor"
      >
        <Link to="contact" smooth duration={500}>
          Contact Me
        </Link>
      </button>
    </div>
  );
}

export default Navbar;
