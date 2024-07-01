'use client';
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react"

export default function SwitchLang(){
    const[ispending, startTransition]=useTransition()
const route =useRouter()
const currentlang =useLocale()
const OnSelectChang=(e)=>{
    const nextlocal =e.target.value;
    startTransition(()=>route.replace(`/${nextlocal}`))
};



return(
    <label className="flex ">
        
        <select defaultValue={currentlang} className=" bg-transparent py-2" onChange={OnSelectChang} 
        disabled={ispending}>
            <option className="text-blue-800" value="ar"> العربية 🇪🇬 </option>
            <option className="text-blue-800 "  value="en">🇬🇧 English </option>
        </select>
    </label>
)
};
