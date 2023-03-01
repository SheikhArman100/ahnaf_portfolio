/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [active, setactive] = useState(false);
  useEffect(() => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setactive(false);
    }
  });

  return (
    <>
      <div className="fixed z-20 flex h-[4rem] w-full items-center justify-between border-b-[1rem] border-t-[1rem]  border-b-[#006a4e]	border-t-[#f42a41] bg-bgColor px-10 transition-[all_0.5s_ease] md:relative md:justify-end md:px-4">
        <div className="flex flex-[1_1_auto]  items-center justify-center  md:hidden ">
          <ul className=" ml-[4rem] flex cursor-pointer  items-center   gap-x-10 font-secondText  text-xs font-semibold text-accentColor transition-[all_0.5s_ease] ">
            <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
              <Link to="home" smooth duration={500}>
                Home
              </Link>
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
              <Link to="about" smooth duration={500}>
                Author Note
              </Link>
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
              <Link to="book" smooth duration={500}>
                Book Published
              </Link>
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
              <Link to="gallery" smooth duration={500}>
                Photo Gallery
              </Link>
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
              <Link to="archive" smooth duration={500}>
                1971 Archive
              </Link>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="mr-6 flex-[0_1_auto] rounded-full border border-none bg-accentColor py-2 px-4 text-base font-bold text-bgColor transition-[all_0.5s_ease] hover:border-accentColor hover:bg-bgColor hover:text-accentColor md:hidden"
        >
          <Link to="contact" smooth duration={500}>
            Contact Me
          </Link>
        </button>
        <button
          type="button"
          onClick={() => setactive(true)}
          className=" hidden transition-[all_0.8s_ease] md:flex"
        >
          <AiOutlineMenu
            size={32}
            className=" text-accentColor transition-[all_0.8s_ease]"
          />
        </button>
      </div>
      {active ? (
        <div
          className=" absolute z-30 hidden     w-screen border-b-[1rem]  border-t-[1rem] border-b-[#006a4e] border-t-[#f42a41] 
        bg-bgColor py-2 md:flex  md:flex-col	md:items-center md:gap-y-2"
        >
          <ul className="flex  cursor-pointer flex-col  items-center justify-center  font-secondText  text-xl font-semibold text-accentColor transition-[all_0.5s_ease] ">
            <li className="mr-6 mt-2 flex w-screen items-center justify-end">
              <button
                type="button"
                onClick={() => setactive(false)}
                className=""
              >
                <AiOutlineClose
                  size={32}
                  className=" text-accentColor transition-[all_0.8s_ease]"
                />
              </button>
            </li>
            <li className="flex items-center justify-center border-b-2 border-transparent py-2 hover:border-accentColor">
              <Link to="home" smooth duration={500}>
                Home
              </Link>
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
              <Link to="about" smooth duration={500}>
                Author Note
              </Link>
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
              <Link to="book" smooth duration={500}>
                Book Published
              </Link>
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
              <Link to="gallery" smooth duration={500}>
                Photo Gallery
              </Link>
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-accentColor">
              <Link to="archive" smooth duration={500}>
                1971 Archive
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className=" rounded-full border border-none bg-accentColor py-2 px-4 text-base font-bold text-bgColor transition-[all_0.5s_ease] hover:border-accentColor hover:bg-bgColor hover:text-accentColor "
          >
            <Link to="contact" smooth duration={500}>
              Contact Me
            </Link>
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
