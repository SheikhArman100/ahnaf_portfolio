/* eslint-disable react/no-array-index-key */

import React, { useEffect, useState } from "react";
import image1 from "../assets/liberation/1.jpg";
import image10 from "../assets/liberation/10.jpg";
import image11 from "../assets/liberation/11.jpg";
import image12 from "../assets/liberation/12.jpg";
import image13 from "../assets/liberation/13.jpg";
import image14 from "../assets/liberation/14.jpg";
import image15 from "../assets/liberation/15.jpg";
import image16 from "../assets/liberation/16.jpg";
import image17 from "../assets/liberation/17.jpg";
import image18 from "../assets/liberation/18.jpg";
import image19 from "../assets/liberation/19.jpg";
import image2 from "../assets/liberation/2.jpg";
import image20 from "../assets/liberation/20.jpg";
import image21 from "../assets/liberation/21.jpg";
import image22 from "../assets/liberation/22.jpg";
import image23 from "../assets/liberation/23.jpg";
import image24 from "../assets/liberation/24.jpg";
import image25 from "../assets/liberation/25.jpg";
import image26 from "../assets/liberation/26.jpg";
import image27 from "../assets/liberation/27.jpg";
import image28 from "../assets/liberation/28.jpg";
import image29 from "../assets/liberation/29.jpg";
import image3 from "../assets/liberation/3.jpg";
import image30 from "../assets/liberation/30.jpg";
import image31 from "../assets/liberation/31.jpg";
import image32 from "../assets/liberation/32.jpg";
import image33 from "../assets/liberation/33.jpg";
import image34 from "../assets/liberation/34.jpg";
import image35 from "../assets/liberation/35.jpg";
import image36 from "../assets/liberation/36.jpg";
import image37 from "../assets/liberation/37.jpg";
import image38 from "../assets/liberation/38.jpg";
import image39 from "../assets/liberation/39.jpg";
import image4 from "../assets/liberation/4.jpg";
import image40 from "../assets/liberation/40.jpg";
import image41 from "../assets/liberation/41.jpg";
import image42 from "../assets/liberation/42.jpg";
import image43 from "../assets/liberation/43.jpg";
import image44 from "../assets/liberation/44.jpg";
import image45 from "../assets/liberation/45.jpg";
import image46 from "../assets/liberation/46.jpg";
import image47 from "../assets/liberation/47.jpg";
import image48 from "../assets/liberation/48.jpg";
import image49 from "../assets/liberation/49.jpg";
import image5 from "../assets/liberation/5.jpg";
import image50 from "../assets/liberation/50.jpg";
import image51 from "../assets/liberation/51.jpg";
import image52 from "../assets/liberation/52.jpg";
import image53 from "../assets/liberation/53.jpg";
import image54 from "../assets/liberation/54.jpg";
import image55 from "../assets/liberation/55.jpg";
import image56 from "../assets/liberation/56.jpg";
import image57 from "../assets/liberation/57.jpg";
import image58 from "../assets/liberation/58.jpg";
import image59 from "../assets/liberation/59.jpg";
import image6 from "../assets/liberation/6.jpg";
import image60 from "../assets/liberation/60.jpg";
import image61 from "../assets/liberation/61.jpg";
import image62 from "../assets/liberation/62.jpg";
import image63 from "../assets/liberation/63.jpg";
import image64 from "../assets/liberation/64.jpg";
import image65 from "../assets/liberation/65.jpg";
import image66 from "../assets/liberation/66.jpg";
import image67 from "../assets/liberation/67.jpg";
import image68 from "../assets/liberation/68.jpg";
import image69 from "../assets/liberation/69.jpg";
import image7 from "../assets/liberation/7.jpg";
import image70 from "../assets/liberation/70.jpg";
import image71 from "../assets/liberation/71.jpg";
import image72 from "../assets/liberation/72.jpg";
import image73 from "../assets/liberation/73.jpg";
import image74 from "../assets/liberation/74.jpg";
import image75 from "../assets/liberation/75.jpg";
import image76 from "../assets/liberation/76.jpg";
import image77 from "../assets/liberation/77.jpg";
import image78 from "../assets/liberation/78.jpg";
import image79 from "../assets/liberation/79.jpg";
import image8 from "../assets/liberation/8.jpg";
import image80 from "../assets/liberation/80.jpg";
import image9 from "../assets/liberation/9.jpg";

function Archive() {
  const [activeTab, setactiveTab] = useState(1);
  const pages = [
    [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20,
    ],

    [
      image21,
      image22,
      image23,
      image24,
      image25,
      image26,
      image27,
      image28,
      image29,
      image30,
      image31,
      image32,
      image33,
      image34,
      image35,
      image36,
      image37,
      image38,
      image39,
      image40,
    ],
    [
      image41,
      image42,
      image43,
      image44,
      image45,
      image46,
      image47,
      image48,
      image49,
      image50,
      image51,
      image52,
      image53,
      image54,
      image55,
      image56,
      image57,
      image58,
      image59,
      image60,
    ],
    [
      image61,
      image62,
      image63,
      image64,
      image65,
      image66,
      image67,
      image68,
      image69,
      image70,
      image71,
      image72,
      image73,
      image74,
      image75,
      image76,
      image77,

      image78,
      image79,
      image80,
    ],
  ];

  const page = pages[activeTab - 1];
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);
  return (
    <div
      name="archive"
      className="flex h-full w-full   flex-col items-center  pt-[4rem]"
    >
      <h2 className="flex-[0_1_auto] text-center text-4xl font-bold underline underline-offset-8">
        1971 Archive
      </h2>
      {loading ? (
        <div className="grid h-[30rem]  place-items-center px-[20rem] py-10">
          <span className="spinner" />
        </div>
      ) : (
        <div className="mt-4 grid  flex-[1_1_auto] grid-cols-5 gap-2 px-[18rem]">
          {page.map((value, index) => (
            <img
              key={index}
              src={value}
              alt=""
              className="h-[10rem] w-[10rem]"
            />
          ))}
        </div>
      )}
      <ul className="mt-8 flex gap-x-2 font-secondText text-sm">
        {[1, 2, 3, 4].map((value, index) => (
          <li key={index}>
            <button
              type="button"
              className={`block h-8 w-8 rounded border border-gray-100
             text-center leading-8 shadow-md ${
               value === activeTab
                 ? "bg-accentColor text-bgColor"
                 : "bg-bgColor text-accentColor"
             }`}
              onClick={() => {
                setLoading(true);
                setactiveTab(value);
              }}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Archive;
