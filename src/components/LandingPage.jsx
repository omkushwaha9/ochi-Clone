import React from 'react'

function LandingPage() {
    return (
        <div className='w-full h-screen bg-zinc-950 pt-1'>
            <div className='textstructure mt-32 px-16'>
                {["We Create", "Eye opening", "Presentations"].map((item,index)=>{
                    return <div className='masker'>
                       <h1 className='uppercase text-[7vw] leading-[7vw] tracking-tighter font-semibold '>
                        {item}
                       </h1>
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-16 '>
                {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
                <div className='start'>
                   <div className='px-4 py-2 border-[1px] border-zinc-700 font-light text-s capitalize rounded-full'>start the project</div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage
