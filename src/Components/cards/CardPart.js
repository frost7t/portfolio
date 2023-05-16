import React from "react";
export default function CardPart({
  title,
  title2,
  first,
  first2,
  second,
  second2,
  third,
  third2,
  four,
  four2,
  five,
  url_img,
}) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row py-10">
      <div className="flex-col leading-8 py-10 md:w-1/5  md:pl-5  text-center order-first flex-grow">
        <h1 className="text-2xl">{title}</h1>
        <ul className="font-light ">
          <li>{first}</li>
          <li>{second}</li>
          <li>{third}</li>
          <li>{four}</li>
          <li>{five}</li>
        </ul>
      </div>
      <div className="px-12 md:w-1/2 order-last lg:order-2 ">
        <img src={url_img} alt={title} className="h-auto max-w-full mt-4 " />
      </div>
      <div className="flex-col leading-8 py-10 md:w-1/5  text-center order-2 flex-grow">
        <h1 className="text-2xl">{title2}</h1>
        <ul className="font-light">
          <li>{first2}</li>
          <li>{second2}</li>
          <li>{third2}</li>
          <li>{four2}</li>
        </ul>
      </div>
    </div>
  );
}
