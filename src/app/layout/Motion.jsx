"use client";

import React,{useEffect,useRef} from "react";
import { motion,useAnimation,useInView } from "framer-motion";

export default function Motion({children}){
const ref=useRef(null);
const IsInView =useInView(ref,{once:true});
const main =useAnimation()
const main2 =useAnimation()

useEffect(()=>{
if(IsInView){
main.start("s")

}else{}

},[IsInView])
  return(
    <div ref={ref}>
      <motion.div
      variants={{
        h:{opacity:0,scale:0 ,y:1000},
        s:{opacity:1,scale:1,y:0},

      }}
      initial="h"
      animate={main}
      transition={{duration:1}}
      >
      {children}
      </motion.div>
    </div>
  )
}

