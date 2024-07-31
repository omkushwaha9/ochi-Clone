import React from 'react'

function About() {
    return (
        <div className='w-full p-16 bg-[#CDEA68] rounded-tl-xl rounded-tr-xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-5xl'>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds,
                sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>
            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]  '>
                <div className='w-1/2'>
                    <h1 className='text-6xl font-light'>Our approach:</h1>
                    <button className=' flex gap-10 items-center px-5 py-4 bg-zinc-950 mt-7 rounded-full text-white  '>
                        Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full '></div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] rounded-xl bg-[#a1b569]'></div>
            </div>
        </div>
    )
}

export default About
