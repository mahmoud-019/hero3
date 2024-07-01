import React from 'react'
import Box from './Box'
import Logo from '../components/logo'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Motion from './Motion'
export default function Footer() {
  const t=useTranslations("footer")

  return (
    <Motion >
    <footer className=' w-full bg-gray-600 items-center mt-9 text-green-300 '>

       <Box>
        {/* links and logo */}
        <div className='flex flex-row justify-between'>
         <div className='flex flex-col'>
          <Link className=' be' href={"/AboutUs/Gallery"} >{t("link1")}</Link>
          <Link className=' be' href={"/AboutUs/cer"}>{t("link2")}</Link>
          <Link className=' be' href={"/ContactUs/jops"}>{t("link3")}</Link>
         </div>
         <Logo/>
        </div>
{/* social and copy */}
        <div className='mx-auto w-fit text-center'>
          <h1> {t("co")}</h1>
          <p>{t("phonet")}:-<span>{t("phone")}</span></p>
          <p>{t("addt")}<span>{t("add")}</span></p>
        </div>
        <div className=' mx-auto w-fit justify-center'>
        <div className='  my-5 text-center flex justify-around'>
      <Link target='blank' href={"https://web.whatsapp.com/"}>
      <FaWhatsapp className='text-green-500' /></Link>
      <a href="mailto:someone@example.com">
        <IoIosMail className=' text-red-500'/></a>
      <Link target='blank' href={"https://www.facebook.com/Hreo.One.Page"}>
      <FaFacebook className=' text-blue-700' /></Link>

        </div>
        <div> {t("c")} </div>
        </div>
      </Box>
    </footer>
    </Motion>
  )
}
