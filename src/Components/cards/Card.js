import Link from "next/link";
import React from "react";

export default function Card({ img, title, extract, slug }) {
  return (
    <>
      <Link href={`post/${slug}`}>
        <div className="mx-auto  items-center grid grid-cols-1  rounded-md my-5  shadow-xl hover:shadow-2xl">
          <div>
            <img
              src={img}
              alt={title}
              className="w-96 h-48  object-cover rounded-xl"
            />
          </div>
          <div className="text-left pl-8">
            <p className="pt-1 max-w-sm">{title}</p>
            <p className="pb-2 max-w-sm">{extract}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
