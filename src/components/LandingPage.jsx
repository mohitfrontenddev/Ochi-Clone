import { motion } from 'framer-motion'
import React from 'react'
import { HiOutlineArrowUpRight } from "react-icons/hi2"
const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
            <div className='textStructred mt-52 px-20'>
                {["We create", "eye-opening", "presentations"].map((item, index) => {
                   return <div className='masked font-["FoundersGrotesk"]'>
                        <div className='w-fit flex items-baseline'>
                        {index === 1  && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}}className='w-[9vw] h-[5.7vw] bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover bg-no-repeat rounded mr-[1vw]'></motion.div> }
                        <h1 key={index} className='text-[9vw] uppercase leading-[6.5vw] tracking-lighter font-semibold'>{item}</h1>
                        </div>
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-3 px-20'>
                {["For public and private companies" , "From the first pitch to IPO"].map((item , index)=>(
                    <div className='sub-heading'>
                        <p className='text-md leading-none font-[NeueMontreal]'>{item}</p>
                    </div>
                ))}
                <div className='btnWrapper flex items-center gap-5'>
                    <div className='startBtn border-[1px] border-zinc-400 py-2 px-5 rounded-full font-light text-md uppercase'  >
                        Start The Project 
                    </div>
                    <div className='arrowWrapper w-10 h-10 rounded-full border-[1px] border-zinc-400 flex justify-center items-center'><HiOutlineArrowUpRight /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
