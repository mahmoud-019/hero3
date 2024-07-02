"use client";
import { useTranslations } from 'next-intl'
import React from 'react'
import Box from '@/src/app/layout/Box'
import ArProduct from "@/src/app/components/ArProduct"
import EnProduct from '@/src/app/components/EnProduct'
import { usePathname } from 'next/navigation'
export default function Page() {
  const a =useTranslations("pro")
const path=usePathname()
 return(
  <>
    <div 
    className='w-full mx-auto rounded-lg text-center prod h-[50svh] mt-14 max-md:mt-20 max-sm:mt-24'>
  <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-600 font-bold'>{a("title")}</h1>
    </div>
    <Box>
      {(path.includes("/ar"))?<ArProduct/>:<EnProduct/>}
    </Box>
  </>
 )
}
