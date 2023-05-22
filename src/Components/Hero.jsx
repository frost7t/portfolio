import React, { useState } from "react";
import Navbar from "./navigation/Navbar";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

export default function Hero({ title, description }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const FIRST_IMAGE = {
    imageUrl: "img/n2.png",
  };
  const SECOND_IMAGE = {
    imageUrl: "img/a1.png",
  };

  return (
    <>
      <div>
        <div className="z-50 absolute top-0 left-0 w-full">
          <Navbar showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
        </div>
        <div className="relative bg-no-repeat bg-center bg-cover mt-14">
          <ReactBeforeSliderComponent
            className="z-10 mx-auto max-w-screen-lg md:max-w-screen-md"
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
          style={{ paddingTop: "100px" }}
        >
          <div className="max-w-screen-lg mx-auto px-4">
            <p className="text-[#111] font-semibold text-5xl md:text-9xl">
              {title}
            </p>
            <p className="text-[#111] text-lg md:text-xl lg:max-w-[70%] pt-5">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}