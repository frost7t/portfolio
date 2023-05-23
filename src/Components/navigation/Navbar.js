import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import React, { useState } from "react";
import { dataNavLinks } from "@/data/DataNavLink";
import Icons from "./Icons";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center  py-5 items-center  mx-auto bg-[#111]">
        <div className="flex items-center">
          <div className="text-white text-2xl items-center">
            <Link href="/">
              <span className="bg-gradient-to-r from-gray-400 to-white text-3xl text-transparent bg-clip-text">
                AR
              </span>
            </Link>
          </div>
          <div className="pl-40">
            <ul className="hidden lg:inline-flex items-center lg:gap-10">
              {dataNavLinks.map(({ id, title, link }) => (
                <Link href={link} key={id}>
                  <li
                    className={`text-base uppercase font-normal text-white tracking-wide cursor-pointer  duration-300 ${
                      router.asPath === link ? "active" : "hover:text-gray-500"
                    }`}
                    key={id}
                  >
                    {title}
                  </li>
                </Link>
              ))}
            </ul>
            <span
              onClick={() => setShowMenu(!showMenu)}
              className="text-xl md:block lg:hidden  w-10 h-10 md:h-full inline-flex items-center justify-center rounded-full text-white cursor-pointer"
            >
              <FiMenu />
            </span>
            {showMenu && (
              <div className="w-[100%]  overflow-scroll absolute top-0 left-0 bg-[#202020] p-4 scrollbar-hide">
                <div className="flex flex-col gap-8 py-2 relative">
                  <div className="text-white text-xl">
                    <span className="bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">
                      AR
                    </span>
                  </div>
                  <ul className="flex flex-col gap-4 text-center">
                    {dataNavLinks.map((item) => (
                      <>
                        <li
                          key={item.id}
                          className="text-base uppercase font-normal text-white tracking-wide cursor-pointer duration-300 hover:text-red-950"
                        >
                          <Link
                            href={item.link}
                            onClick={() => setShowMenu(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      </>
                    ))}
                  </ul>
                  <div className="text-white">
                    <Icons />
                  </div>
                  <div className="flex flex-col gap-4">
                    <span
                      onClick={() => setShowMenu(false)}
                      className="absolute top-3 right-4 text-white duration-300 text-2xl cursor-pointer"
                    >
                      <MdClose />
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="text-white hidden lg:block">
          <Icons />
        </div>
      </div>
    </>
  );
}
