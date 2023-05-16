import React from "react";

export default function CardQrCode({ url_img, title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl ">{title}</h1>
      <div className="flex justify-center">
        <img src={url_img} alt={title} className="h-auto max-w-full my-3" />
      </div>
      <h3 className="text-lg">{subtitle}</h3>
    </div>
  );
}
