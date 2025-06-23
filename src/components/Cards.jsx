import React from 'react'

const Cards = () => {
    return (
        <div data-scroll data-scroll-section className='w-full h-screen bg-zinc-100 py-20 px-20 flex gap-5 items-center'>
            <div className='cardsContainer w-1/2 h-[50vh]'>
                <div className='card w-full h-full bg-[#004d43] rounded-xl relative p-10'>
                    <div className='logo-wrapper h-full flex justify-center items-center  '>
                        <img className='w-[9vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    </div>
                    <div className='date-wrapper border-[1px] border-[#CDE967] rounded-full p-2  absolute left-10 bottom-10 '>
                        <p className='font-[NeueMontreal] text-[14px] uppercase leading-none  text-[#CDE967]'>©2019–2022</p>
                    </div>
                </div>
            </div>
            <div className='cardsContainer w-1/2 h-[50vh] flex gap-5'>
                <div className='card w-1/2  h-full bg-[#212121] rounded-xl p-10 relative'>
                    <div className='logo-wrapper h-full flex justify-center items-center h-full'>
                        <img className='w-[9vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    </div>
                    <div className='date-wrapper border-[1px] border-zinc-100 rounded-full p-2  absolute left-10 bottom-10 '>
                        <p className='font-[NeueMontreal] text-[14px] uppercase leading-none  text-zinc-100'>Rating 5.0 on Clutch</p>
                    </div>
                </div>
                <div className='card w-1/2  h-full  bg-[#212121] rounded-xl relative'>
                    <div className='logo-wrapper h-full flex justify-center items-center  p-10'>
                        <img className='w-[9vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    </div>
                    <div className='date-wrapper border-[1px] border-zinc-100 rounded-full p-2  absolute left-10 bottom-10  '>
                        <p className='font-[NeueMontreal] text-[14px] uppercase leading-none  text-zinc-100'>Business Bootcamp Alumni</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
