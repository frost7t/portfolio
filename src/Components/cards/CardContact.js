import React from "react";
import CardIconsContact from "./CardIconsContact";

export default function CardContact({ title, subtitle, url_img }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="mx-auto py-5 lg:pt-20 justify-center sm:pl-10">
        <h1 className="text-gray-800 text-6xl sm:text-7xl font-bold">
          {title}
        </h1>
        <p className="font-light text-lg sm:text-2xl py-6">
          {subtitle}
          <br />
          <span>media or email.</span>
        </p>
        <CardIconsContact />
      </div>
      <div>
        <img src={url_img} alt={title} className="h-auto max-w-full md:mt-16 lg:mt-8" />
      </div>
    </div>
  );
}
