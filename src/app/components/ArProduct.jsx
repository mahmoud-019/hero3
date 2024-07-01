"use client";
import React, { useState } from "react";
import { ap, ap1, ap2 } from "@/src/constants/arpro";
import Motion from "../layout/Motion";
import MotionL from "../layout/MotionL";
import MotionR from "../layout/MotionR";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";
export default function ArProduct() {
  const [active, setactive] = useState();
  
  return (
    <>
      <dialog open={!!active}>
        <div
          className=" z-40 fixed inset-0 bg-slate-600 bg-opacity-30 backdrop-blur-sm"
          onClick={() => setactive()}
        >
          <Image
            src={active}
            width={1000}
            height={1000}
            alt="cannot show info"
            className=" my-1 mx-auto"
          />
          <IoIosCloseCircleOutline
            className=" text-3xl text-red-900 fixed top-1 right-1"
            onClick={() => setactive()}
          />
        </div>
      </dialog>
      {/* first section */}
      <>
        <h1
          className="w-fit text-transparent text-3xl mx-auto my-6 h-12  bg-gradient-to-t from-blue-500 to-green-500 
             bg-clip-text"
        >
          النوع
        </h1>
        <section className=" grid grid-cols-4 mx-auto w-fit gap-10 max-lg:grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1">
          {ap.map((item) => (
            <>
              <Motion>
                <div
                  className="  text-center hover:shadow-2xl rounded-lg hover:scale-105 
     group transition duration-300 ease-in hover:cursor-pointer"
                  onClick={() => setactive(item.sh)}
                >
                  <h2 className="group-hover:opacity-30">{item.title}</h2>
                  <p className=" text-transparent relative top-8  group-hover:text-blue-900 ">
                    انقر لمذيد من التفاصيل
                  </p>
                  <Image
                    src={item.source}
                    width={200}
                    height={200}
                    alt="img of product"
                    className="group-hover:opacity-30"
                  />
                </div>
              </Motion>
            </>
          ))}
        </section>
      </>
      <>
        {/* second section */}
        <h1
          className="w-fit text-transparent text-3xl mx-auto my-6 h-12  bg-gradient-to-t from-blue-500 to-green-500 
             bg-clip-text"
        >
          النوع
        </h1>
        <section className=" grid grid-cols-4 mx-auto w-fit gap-10 max-lg:grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1">
          {ap1.map((item) => (
            <>
              <MotionL>
                <div
                  className="  text-center hover:shadow-2xl rounded-lg hover:scale-105 
     group transition duration-300 ease-in hover:cursor-pointer"
                  onClick={() => setactive(item.sh)}
                >
                  <h2 className="group-hover:opacity-30">{item.title}</h2>
                  <p className=" text-transparent relative top-8  group-hover:text-blue-900 ">
                    انقر لمذيد من التفاصيل
                  </p>
                  <Image
                    src={item.source}
                    width={200}
                    height={200}
                    alt="img of product"
                    className="group-hover:opacity-30"
                  />
                </div>
              </MotionL>
            </>
          ))}
        </section>
      </>
      {/* therd section */}
      <>
        <h1
          className="w-fit text-transparent text-3xl mx-auto my-6 h-12  bg-gradient-to-t from-blue-500 to-green-500 
             bg-clip-text"
        >
          النوع
        </h1>
        <section className=" grid grid-cols-4 mx-auto w-fit gap-10 max-lg:grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1">
          {ap2.map((item) => (
            <>
              <MotionR>
                <div
                  className="  text-center hover:shadow-2xl rounded-lg hover:scale-105 
     group transition duration-300 ease-in hover:cursor-pointer"
                  onClick={() => setactive(item.sh)}
                >
                  <h2 className="group-hover:opacity-30">{item.title}</h2>
                  <p className=" text-transparent relative top-8  group-hover:text-blue-900 ">
                    انقر لمذيد من التفاصيل
                  </p>
                  <Image
                    src={item.source}
                    width={200}
                    height={200}
                    alt="img of product"
                    className="group-hover:opacity-30"
                  />
                </div>
              </MotionR>
            </>
          ))}
        </section>
      </>
    </>
  );
}
