import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center text-gray-800  bg-[#dddddd] h-full p-10 ">
      <div className="lg:grid lg:grid-cols-2  gap-96">
        <p className="hover:text-gray-500">&#169;2023 Antoine Raimbault</p>
        <ul className="lg:flex space-x-8 hidden ">
          <Link href="/">
            <li className="hover:text-gray-500">Home</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-gray-500">About</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-gray-500">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
