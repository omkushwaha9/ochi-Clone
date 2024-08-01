import React from 'react'

function Cards() {
  return (
    <div className=' w-full h-screen bg-zinc-950 flex items-center px-32 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
        <div className='card rounded-xl w-full h-full bg-[#004d43]'></div>
        </div>
        <div className='cardcontainer h-[50vh] flex gap-5 w-1/2'>
        <div className='card rounded-xl w-1/2 h-full bg-[#192826]'></div>
        <div className='card rounded-xl w-1/2 h-full bg-[#192826]'></div>
        </div>      
    </div>
  )
}

export default Cards
