"use client";
import Image from "next/image";
import { img } from "@/src/constants/gpath";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
export default function page() {
  const [next, setnext] = useState();
  const [active, setactive] = useState();
const t=useTranslations("aboutus")
  const handleNext = () => {
    const nextIndex = (next + 1) % img.length; // Use modulo to cycle back
    setnext(nextIndex);
    setactive(img[nextIndex].source);
  };
  const handlePre = () => {
    const prevIndex = (next - 1 + img.length) % img.length; // Handle negative index
    setnext(prevIndex);
    setactive(img[prevIndex].source);
  };
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePre();
      } else if (e.key === "Escape") {
        setactive();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [next]);
  return (
    <>
    <div className="gall mt-4 mb-10 text-4xl pt-8 max-md:pt-16 text-green-500">
  <h1>{t("gallerypage")}</h1>
    </div>
    <div ></div>
    {/* poupup model */}
      <dialog open={!!active}>
        <div className=" z-40 fixed inset-0  bg-black bg-opacity-30  grid items-center justify-center">
          <Image src={active} width={900} height={800} alt="error !" />

          <AiOutlineClose
            className=" text-3xl text-green-300 opacity-80 hover:opacity-100 bg-gray-700 fixed top-1 right-1 max-[900px]:top-[25%] rounded-tr-xl rounded-bl-xl"onClick={() => setactive()}/>

          <button
            onClick={() => handleNext()} 
            className=" w-fit rounded-full opacity-50 hover:opacity-100 bg-white p-1 fixed top-[49%] 
          left-2 max-lg:left-0"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => handlePre()}
            className=" w-fit rounded-full opacity-50 hover:opacity-100 bg-white p-1
            fixed top-[49%] right-2 max-lg:right-0 "
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </dialog>
      {/* map of gallery start */}
      <div className="grid grid-cols-3 gap-1 m-2 w-fit mx-auto  pt-2 bg-yellow-900/10 shadow-lg ">
        {img.map((e, i) => (
          <div >
            <Image
              src={e.source}
              width={500}
              height={500}
              alt={e.alt}
              key={e.id}
              onClick={() => (setactive(e.source), setnext(i))}
            />
          </div>
        ))}
      </div>
    </>
  );
}
