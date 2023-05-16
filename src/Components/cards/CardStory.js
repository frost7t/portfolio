import React from "react";

export default function CardStory({ title, description, subtitle, url_img }) {
  return (
    <>
      <div className="border-b-2 border ">
        <div className="mx-auto max-w-[1040px]">
          <div className="px-5  grid grid-cols-1 lg:grid-cols-2 py-20">
            <div className="lg:py-20">
              <h1 className="text-3xl">{title}</h1>
              <p className="py-3 font-light text-lg">{description}</p>
              <p className="underline font-light">{subtitle}</p>
            </div>
            <div>
              <img
                src={url_img}
                alt={title}
                className="h-auto max-w-full mt-3 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
