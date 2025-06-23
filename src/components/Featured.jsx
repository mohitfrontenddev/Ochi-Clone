import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {

    const cards = [useAnimation(), useAnimation()];
    const handleHover = (index) => {
        cards[index].start({ y: "0%" })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div data-scroll data-scroll-section className='featured-post-wrapper w-full py-20'>
            <div className='title-wrapper px-20 border-b-[1px] border-zinc-600 pb-10'>
                <h1 className='font-[NeueMontreal] text-[4vw] leading-none tracking-tighter'>Featured projects</h1>
            </div>
            <div className='cards w-full px-20 flex gap-10 mt-20'>
                <motion.div
                    onHoverStart={() => handleHover(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className='cardsContainer w-1/2 h-[60vh] rounded-xl relative'>
                    <div className='tag-container flex overflow-hidden absolute z-[999] left-full top-1/2 -translate-x-1/2'>
                        <h2 className='text-[8vw] flex leading-none font-[FoundersGrotesk] uppercase font-extrabold  text-[#b0c859] whitespace-nowrap'>
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                                    className='inline-block'>{item}
                                </motion.span>
                            ))}
                        </h2>
                    </div>
                    <div className='img-container overflow-hidden '>
                        <img className="rounded-xl" src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png' />
                    </div>

                </motion.div>
                <motion.div 
                 onHoverStart={() => handleHover(1)}
                 onHoverEnd={() => handleHoverEnd(1)}
                className='cardsContainer
                   w-1/2 h-[60vh] rounded-xl relative'>
                    <div className='tag-container flex overflow-hidden absolute z-[999] right-full top-1/2 translate-x-1/2'>
                        <h2 className='text-[8vw] leading-none font-[FoundersGrotesk] uppercase font-extrabold  text-[#b0c859] whitespace-nowrap'>
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                                    className='inline-block'>{item}
                                </motion.span>
                            ))}
                        </h2>
                    </div>
                    <div className='img-container overflow-hidden '>
                        <img className="rounded-xl" src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg' />
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default Featured
