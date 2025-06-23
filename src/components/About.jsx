import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.35" className='w-full py-20 px-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl'>
      <h2 className='text-[#212121] text-[3.6vw] font-[NeueMontreal] leading-none tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h2>
      <div className='bottom-part w-full border-t-[1px] border-[#90a348] mt-20 flex gap-5 py-10'>
        <div className='w-1/2'>
            <h3 className='text-[#212121] text-[3.6vw] font-[NeueMontreal] leading-none tracking-tight'>Our approach:</h3>
            <div className='btn-wrapper mt-10'>
                <button className='bg-[#212121] rounded-full px-6 py-4 flex items-center gap-5 uppercase  font-[NeueMontreal]'>
                    Read More
                    <div className='w-3 h-3 rounded-full bg-white'></div>
                </button>
            </div>
        </div>
        <div className='w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
