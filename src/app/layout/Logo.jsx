import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
export default function Logo() {
    const l = useTranslations('logo');
  return (
<Link className='flex  items-center ' href={"/"}>

<Image src={"/image/logo.png"} width={100}  height={50} alt='logo'/>
<span className='max-lg: text-sm mt-3 '>
 <p className=' text-2xl font-bold'>{l("title")}</p>
 <p className=' font-mono text-[10px] max-sm:hidden'> {l("name")}</p>
</span>
     </Link>
  )
}
