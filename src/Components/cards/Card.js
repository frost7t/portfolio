import Link from "next/link";
import React from "react";

export default function Card({ img, title, extract, slug }) {
  return (
    <>
      <Link href={`post/${slug}`}>
        <div className="mx-auto   flex flex-col items-center my-5 lg:my-10  rounded-md  shadow-xl hover:shadow-2xl">
          <div>
            <img
              src={img}
              alt={title}
              className="w-96 h-48  object-cover rounded-2xl  p-3"
            />
          </div>
          <div className="text-left pl-8">
            <p className="pt-1 max-w-sm">{title}</p>
            <p className="pb-4 max-w-sm">{extract}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
