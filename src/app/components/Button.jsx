"use client";
import { useTranslations } from "next-intl";
import { motion} from "framer-motion";
import Link from "next/link";


export default function Button() {
  const t = useTranslations('home');
  return (

    <Link className=" rounded-lg bg-green-400/80 py-4 px-1 text-center w-fit mx-auto hover:font-bold hover:underline 
transition duration-500 ease-in-out   hover:text-stone-100 hover:bg-pink-600 "
    href={"./Hero-One.pdf"}
    target="blank"
    download
    >
   {t("download")}
    </Link>
   
  )
}
