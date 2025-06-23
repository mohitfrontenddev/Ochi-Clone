import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })
    return (
        <div data-scroll data-scroll-section className='eyes w-full h-full overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className='relative w-full h-screen bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] bg-center bg-no-repeat bg-cover'>
                <div  className='absolute w-1/3 h-[15vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-between items-center gap-10'>
                    <div className='eye-balls bg-zinc-100 w-[15vw] h-[15vw] rounded-full flex justify-center items-center'>
                        <div className='relative eye-ball-black w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='eye-ball w-[20px] h-[20px] bg-zinc-100 rounded-full m-5'></div>
                            </div>
                        </div>
                    </div>
                    <div className='eye-balls bg-zinc-100 w-[15vw] h-[15vw] rounded-full flex justify-center items-center'>
                        <div className='relative eye-ball-black w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='eye-ball w-[20px] h-[20px] bg-zinc-100 rounded-full m-5'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Eyes
