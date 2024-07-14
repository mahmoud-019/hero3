  "use client";
  import {useTranslations} from 'next-intl';
import { useState,useEffect } from 'react';
import React from 'react';
import Box from './Box';
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from '@/src/navigation';
import SwitchLang from './SwitchLang';
import Logo from './Logo';
import { usePathname } from 'next/navigation';




export default function Header() {
//usestate consts
  const [menu,setmenu]=useState(true);
const [nav,setnav]=useState(false);
const path =usePathname()
//scroll nav state
const scrol=()=>{
  if (window.scrollY>=20) {
    setnav(true)
  }else{setnav(false)}
};
useEffect(()=>{
  window.addEventListener('scroll',scrol)
  return ()=>{window.addEventListener('scroll',scrol)}
},[])
//translation
  const l = useTranslations('logo');
  const n = useTranslations('navb');

  return (
    <header 
className={nav?'z-40 fixed top-1 w-4/5  block bg-green-500 left-[10%] text-sm rounded-lg text-white transition duration-500 ease-linear'

:' z-40 transition duration-500 ease-linear fixed top-0 w-full items-center text-amber-800  block bg-transparent'} >
      {/* contaner start */}
      <Box>
        <div className='flex justify-between items-center' >
        <Logo/>
    {/* navigation start */}
      <nav className='flex justify-between w-5/12  max-[900px]:hidden '>
        <Link href={"/"}
         className={path.endsWith("ar")||path.endsWith("en")?"text-blue-900   ":" hover:text-blue-900  "}>{n("home")}</Link>
        <Link href={"/Products"}
         className={path.endsWith("Products")?"text-blue-900  ":" hover:text-blue-900  "}>{n("products")}</Link>
        <Link href={"/AboutUs"}
         className={path.endsWith("AboutUs")?"text-blue-900  ":" hover:text-blue-900  "}>{n("about us")}</Link>
        <Link href={"/ContactUs"}
         className={path.endsWith("ContactUs")?"text-blue-900  ":" hover:text-blue-900  "}>{n("contact us")}</Link>
      </nav>
{/* responsive icone navigation */}
<div className=' hidden max-[900px]:flex  '  >
  { menu ? (
  
    <CiMenuBurger className=' text-3xl'
     onClick={()=>setmenu(!menu)}/>
  ):(<div className=' transition duration-700 ease-linear' >
<IoCloseOutline className=' text-3xl'
 onClick={()=>setmenu(!menu)}
/>
<div className='flex flex-col bg-green-200/30 w-full transition duration-700 ease-linear
absolute mt-9 left-0 overflow-visible '>
 
      <Link href={"/"} className=' transition duration-500 ease-in-out mt-4 mb-4  hover:border-b-[1px] hover:border-gray-500 text-3xl hover:text-blue-600'>{n("home")}</Link>
      <Link href={"/Products"} className=' transition duration-500 ease-in-out mt-4 mb-4  hover:border-b-[1px] hover:border-gray-500 text-3xl hover:text-blue-600'>{n("products")}</Link>
      <Link href={"/AboutUs"} className=' transition duration-500 ease-in-out mt-4 mb-4  hover:border-b-[1px] hover:border-gray-500 text-3xl hover:text-blue-600'>{n("about us")}</Link>
      <Link href={"/ContactUs"} className=' transition duration-500 ease-in-out mt-4 mb-4  hover:border-b-[1px] hover:border-gray-500 text-3xl hover:text-blue-600'>{n("contact us")}</Link>
</div></div>
  )
  }

</div>

      {/* language icone */}

<SwitchLang/>

     

       </div>
      </Box>
    </header>
  );
}
