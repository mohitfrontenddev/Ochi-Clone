import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".12"  className='w-full py-20 pb-30 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
      <div className='marquee-text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap pb-5'>
        <motion.h2 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='text-[20vw] leading-none font-[FoundersGrotesk] uppercase font-bold pr-5'>we are ochi</motion.h2>
        <motion.h2 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='text-[20vw] leading-none font-[FoundersGrotesk]  uppercase font-bold pr-5'>we are ochi</motion.h2>
        <motion.h2 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='text-[20vw] leading-none font-[FoundersGrotesk]  uppercase font-bold pr-5'>we are ochi</motion.h2>
      </div>
    </div>
  )
}

export default Marquee
