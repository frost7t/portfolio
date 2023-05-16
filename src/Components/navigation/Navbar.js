import Link from "next/link";
import React from "react";
import Icons from "./Icons";

export default function Navbar({ showMenu, handleToggleMenu }) {
  return (
    <div className=" flex justify-evenly pl-10 py-5 items-center mx-auto bg-[#111]  w-full">
      <Link href="/">
        <h1 className="text-white text-3xl font-extrabold">
          A
          <span className="bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">
            R
          </span>
        </h1>
      </Link>
      {/* Render burger menu for mobile/tab /svg => burger + close_Burger */}
      <div className="lg:hidden ml-auto">
        <button onClick={handleToggleMenu} className="flex items-center">
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </>
          )}
        </button>
      </div>
      <div className="mr-10 ">
        <ul
          className={`lg:flex justify-center space-x-5 text-white text-lg ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <Link href="/">
            <li className="hover:text-gray-500">Home</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-gray-500">About</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-gray-500">Contact</li>
          </Link>
          <div className="">
            <Icons />
          </div>
        </ul>
      </div>
    </div>
  );
}
