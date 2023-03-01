import React from "react";
import { CgPhone } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div
      name="contact"
      className="mt-[6rem] flex h-full w-screen flex-col  items-center bg-accentColor  py-4 text-bgColor md:mt-[4rem]"
    >
      <div className="text-center text-4xl font-bold underline underline-offset-8 md:text-2xl">
        Contact Information
      </div>
      <h3 className="text-bases mt-2 text-center font-medium ">
        come and visit my office
      </h3>
      <div className="flex items-center justify-center gap-x-10 sm:gap-x-1 md:flex-col md:gap-x-3 ">
        <div className="flex  h-40 w-40 flex-[1_1_auto] flex-col items-center rounded-lg  py-6 px-2 text-center text-bgColor sm:px-1 sm:py-3 md:h-28 md:w-full md:py-2">
          <IoLocationSharp size={40} />
          <span className="font-bold sm:text-xs md:text-sm">Location</span>
          <p className="mt-2 font-secondText text-xs ">
            House #22, Road #23, Block #B, Banani, Dhaka-1213
          </p>
        </div>
        <div className="flex aspect-square h-40 w-40 flex-[1_1_auto] flex-col items-center rounded-lg py-6  px-2 text-center text-bgColor md:h-28 md:py-2">
          <CgPhone size={40} />
          <span className="font-bold sm:text-xs md:text-sm">Phone</span>
          <p className=" mt-2 font-secondText text-xs ">0189 482 9666</p>
          <p className="font-secondText text-xs ">0176 865 4422</p>
        </div>
        <div className="flex aspect-square h-40 w-40 flex-[1_1_auto] flex-col items-center  rounded-lg py-6 px-2 text-center text-bgColor md:h-28 md:py-2">
          <MdEmail size={40} />
          <span className="font-bold sm:text-xs md:text-sm">Email Address</span>
          <p className="mt-2 font-secondText text-xs">infomusabd@gmail.com</p>
          <p className="font-secondText text-xs">info@musabd.net</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
