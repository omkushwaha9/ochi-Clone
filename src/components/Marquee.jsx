import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10 bg-[#004d43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap'>
        <h1 className='text-[10vw] leading-none font-["Founders_Grotesk_X-condensed"] uppercase pt-10 -mt-1'>WE ARE OCHI</h1>
        <h1 className='text-[10vw] leading-none font-["Founders_Grotesk_X-condensed"] uppercase pt-10 -mt-1'>WE ARE OCHI</h1>
      </div>
    </div>
  )
}

export default Marquee
