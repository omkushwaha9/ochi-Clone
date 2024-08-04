import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
  return (
    <div className='w-full py-[100px] rounded-tl-xl rounded-tr-xl bg-[#004d43]'>
      <div className='text  border-t-[0.5px] border-b-[0.5px] border-zinc-400 flex  overflow-hidden whitespace-nowrap'>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[28vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pr-20 pt-4 -mb-[9.3vw] font-semibold'>
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[28vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pr-20 pt-4 -mb-[9.3vw] font-semibold'>
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
