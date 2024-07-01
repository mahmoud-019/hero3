
import { useTranslations } from 'next-intl'
import { ThreeWay } from '../../layout/ThreeWay'
import Box from '../../layout/Box'
import Logo from '../../components/Logo'
import Link from 'next/link'
import { CiMail } from "react-icons/ci";
import { MdContactPhone } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import Image from 'next/image'

export default function page() {
  const t=useTranslations("contact")
  return (
  <>
  <ThreeWay>
  <div className='h-[70svh] cont text-center '>
<h1 className='pt-10 max-md:pt-24 max-md:text-4xl text-3xl font-bold text-transparent
 bg-clip-text bg-gradient-to-l from-blue-500 to-green-500'>{t("head")}</h1>
  </div>
  </ThreeWay>
<Box>
  <div className='w-2/3 mx-auto my-4  py-4  bg-gradient-to-tr from-blue-400 to-green-400  min-h-52'>
  <div className='mx-auto w-fit mb-8'>
<Logo></Logo></div>
<div className='w-full bg-white bg-opacity-60 text-center align-middle grid grid-cols-2 gap-1  max-md:grid-cols-1 max-md:grid-rows-3'>
  
<div className='w-full bg-white bg-opacity-25 max-md:my-auto mx-auto '>
<MdContactPhone className='w-fit mx-auto mt-2 text-blue-500'/>

  <h2>{t("phone")} </h2>
  <Link href={"/"} className='hover:bg-green-300 block transition duration-300 ease-in-out'>{t("phone1")}</Link>
  <Link href={"/"} className='hover:bg-green-300 block transition duration-300 ease-in-out'>{t("phone2")}</Link>
  </div>

<div className='w-full bg-white bg-opacity-25 max-md:my-auto mx-auto '>
<CiMail className='w-fit mx-auto mt-2 text-blue-500'/>
 
  <h2>{t("mail")}</h2>
  <Link href={"/"} className='hover:bg-green-300 block transition duration-300 ease-in-out'>{t("mailadd")}</Link>
  </div>

<div className='w-full bg-white bg-opacity-25 max-md:my-auto mx-auto  col-span-2 max-md:col-auto'>
< GrMapLocation className='w-fit mx-auto mt-2 text-blue-500'/>

  <h2>{t("loc")}</h2>
  <Link href={"https://www.google.com/maps/place/9GPP%2BJ5J%D8%8C+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%A7%D8%AA%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%81%D9%8A%D8%A9+6011312%E2%80%AD/@30.3874256,30.5366358,18z/data=!4m6!3m5!1s0x145896069744bd33:0xb1a41232c6d639fa!8m2!3d30.3865936!4d30.5354093!16s%2Fg%2F11tg10cc93?entry=ttu"} 
  className='hover:bg-green-300 block transition duration-300 ease-in-out'>{t("locadd")}</Link>
  </div>

</div>

  </div>
<div className='w-fit bg-slate-200 mx-auto p-2 leading-8 my-4 '>
  <h3>{t("qr")}</h3>
  <Link href={"/"} className=' inline-block '><Image src={"/image/qr.jpg"} width={300} height={300} alt='qr scan' /></Link></div>
   <h2 className="w-fit p-2 shadow-lg mx-auto my-8 
   rounded-2xl bg-clip-text bg-gradient-to-r from-violet-600 to-red-600 text-transparent text-3xl">{t("app")}</h2>
  
  <div className='my-5 mx-auto text-center bg-slate-300/50 w-fit p-2 rounded-lg'>
   <p className='my-2'>{t("state")}</p>
   <Link className=" underline underline-offset-8 " href={"ContactUs/jops"}>{t("epage")}</Link>
  </div>
  
  </Box>
  </>
  )
}
