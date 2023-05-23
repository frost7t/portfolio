import Layout from "@/layout/Layout";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <Layout>
      <div className="border-b-2 border shadow-lg lg:pb-24 ">
        <div className=" mx-auto max-w-[1040px] px-5 pt-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex-col  pb-10">
            <h1 className="text-4xl lg:text-7xl font-medium text-gray-800 pb-3">
              Hmmm...
            </h1>
            <p className="pb-3 text-2xl font-extralight">
              Occured,a 404 error has. | sense <br /> much fear in you.
            </p>
            <h3 className="text-lg font-light">
              {/* fr = Faites confiance à la force, videz votre esprit, désapprenez ce que vous avez appris et trouvez la page qui vous intéresse. */}
              Trust in the force, clear your mind,unlearn what you have learned,
              and find you minssing page you wil
            </h3>
            <Link href="/">
              <div className="flex gap-3 text-white text-xl font-semibold pt-5">
                <button className="bg-green-800 rounded-sm p-2 w-20">Do</button>
                <button className="bg-red-700 rounded-sm  w-36">Do not</button>
              </div>
            </Link>
          </div>
          <div className="pb-5">
            <img
              src="../img/yoda3.png"
              alt="error404"
              className="h-auto lg:max-w-xl "
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
