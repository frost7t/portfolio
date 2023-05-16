import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import CardUsers from "./CardUsers";

export default function CardSlug({
  title,
  imgSinglePage,
  extract,
  content,
  createdAt,
  Do,
}) {
  return (
    <>
      <div className="grid grid-cols-1 items-center px-5 pt-10 lg:pt-36 mx-auto max-w-[1040px] md:flex">
        <div className="">
          <p className="text-3xl lg:text-4xl max-w-fit border-b-black border-b">
            {title}
          </p>
          <div className="flex justify-between py-4">
            <p className="">{extract}</p>
            <p className="pr-14">{createdAt}</p>
          </div>
          <div className="pb-5">{documentToReactComponents(content)}</div>
          <div>
            <p>{Do}</p>
          </div>
        </div>
        <div className="shadow-lg ">
          <img src={imgSinglePage} alt={title} className="h-auto max-w-full" />
        </div>
      </div>
      {/* les users qui participent au projet */}
      <div>
        <CardUsers />
      </div>
    </>
  );
}
