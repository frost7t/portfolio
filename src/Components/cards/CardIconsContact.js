import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function CardIconsContact() {
  return (
    <div className="flex-col sm:flex-row justify-center">
      <div className="flex flex-col sm:flex-row justify-start sm:space-x-12">
        <div className="flex items-center space-x-5 pb-2">
          <AiFillTwitterCircle
            className="text-blue-400"
            style={{ fontSize: "2.8em" }}
          />
          <span className="text-blue-500 font-semibold text-lg">Twitter</span>
        </div>
        <div className="flex items-center space-x-5 pb-2">
          <BsFacebook className="text-blue-800" style={{ fontSize: "2.6em" }} />
          <span className="text-blue-800 font-semibold text-lg ">Facebook</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between pt-2">
        <div className="flex items-center space-x-5 pb-3">
          <BsLinkedin
            className="text-blue-500 rounded-full "
            style={{ fontSize: "2.6em" }}
          />
          <span className="text-blue-500 font-semibold text-lg">Linkedin</span>
        </div>
      </div>
    </div>
  );
}
