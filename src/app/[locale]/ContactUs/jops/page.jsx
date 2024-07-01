import React from 'react';
import { useTranslations } from 'next-intl';
import Box from '@/src/app/layout/Box';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
export default function page() {
const t=useTranslations("contact")
return (<>

<div className='jop text-center pt-8 text-4xl'>
  <h1 className='w-full bg-black bg-opacity-30 backdrop-blur-sm text-green-300'>{t("app")}</h1>
</div>
<Box>
<section className='text-center my-8 p-2 mx-auto w-full bg-green-100 rounded-lg'>
  <h2>{t("statetitle")}</h2>
  <p className='bg-gray-100'>{t("state")}</p>
  <Link href={"/"} className='w-fit mx-auto p-1 rounded-md inline-block my-2 bg-white'><FaHome/></Link>
</section></Box>
  </>)
}
