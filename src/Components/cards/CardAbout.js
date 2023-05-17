import React from "react";

export default function CardAbout({ title, subtitle, description, url_img }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-5 lg:py-10 px-5">
        <div className="mx-auto lg:pt-20 justify-center sm:pl-10">
          <h1 className="text-gray-800 text-6xl sm:text-7xl font-bold">
            {title}
          </h1>
          <p className="font-light text-lg sm:text-2xl py-6">{subtitle}</p>
          <p className="font-light text-md">{description}</p>
        </div>
        <div>
          <img src={url_img} alt={title} className="h-auto max-w-full mt-4" />
        </div>
        <hr />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 py-10 px-5">
        <img
          src="img/about/code.jpg"
          alt="code"
          className="border-4 border-white shadow-xl hover:shadow-2xl rounded-lg h-auto max-w-full"
        />
        <img
          src="img/about/normandie.jpg"
          alt="normandie"
          className="border-4 border-white shadow-xl hover:shadow-2xl rounded-lg h-auto max-w-full"
        />
        <img
          src="img/about/controller.jpg"
          alt="controller"
          className="border-4 border-white shadow-xl hover:shadow-2xl rounded-lg h-auto max-w-full"
        />
        <img
          src="img/about/cuisine.jpg"
          alt="cuisine"
          className="border-4 border-white shadow-xl hover:shadow-2xl rounded-lg h-auto max-w-full"
        />
        <img
          src="img/about/Yoda.jpg"
          alt="yoda"
          className="border-4 border-white shadow-xl hover:shadow-2xl rounded-lg h-full max-w-full"
        />
        <img
          src="img/about/des.jpg"
          alt="Image 6"
          className="border-4 border-white shadow-xl hover:shadow-2xl rounded-lg h-auto max-w-full"
        />
      </div>
    </>
  );
}
