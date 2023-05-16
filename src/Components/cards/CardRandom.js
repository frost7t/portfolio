import React from "react";
export default function CardRandom({
  url_img,
  title,
  subtitle,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
  subtitle6,
  subtitle7,
}) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row lg:pt-20">
      <div className=" ">
        <img
          src={url_img}
          alt={title}
          className="h-auto max-w-full lg:max-w-xl mt-4 order-last md:max-w-md"
        />
      </div>
      <div className="flex-col leading-8 py-10 md:w-1/5 md:text-left md:pl-5  text-center  flex-grow order-first lg:order-last">
        <h1 className="text-4xl pb-3 font-[350]">{title}</h1>
        <ul className="font-light text-md">
          <li>{subtitle}</li>
          <li>{subtitle1}</li>
          <li>{subtitle2}</li>
          <li>{subtitle3}</li>
          <li>{subtitle4}</li>
          <li>{subtitle5}</li>
          <li>{subtitle6}</li>
          <li>{subtitle7}</li>
        </ul>
      </div>
    </div>
  );
}
