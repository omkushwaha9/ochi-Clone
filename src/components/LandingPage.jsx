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
        </div>
    )
}

export default LandingPage
