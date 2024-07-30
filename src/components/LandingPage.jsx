import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <div className='w-full h-screen bg-zinc-950 pt-1'>
            <div className='textstructure mt-40 px-16'>
                {["We Create", "Eye opening", "Presentations"].map((item, index) => {
                    return <div className='masker'>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (
                                <div className=' mr-5 w-[9vw] rounded-md h-[5.7vw] relative -top-[0.8vw] bg-green-500'></div>
                                )}
                            <h1 className=' pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[6vw]  font-bold font-["Founders_Grotesk_x-Condensed"] '>
                                {item}
                            </h1>
                        </div>
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-700 mt-28 flex justify-between items-center py-5 px-16 '>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
                <div className='start flex items-center gap-2'>
                    <div className='px-4 py-2 border-[1px] border-zinc-700 font-light text-md uppercase rounded-full'>start the project</div>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-700'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage
