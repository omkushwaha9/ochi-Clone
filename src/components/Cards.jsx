import React from 'react'

function Cards() {
  return (
    <div className=' w-full h-screen bg-zinc-950 flex items-center px-32 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
        <div className=' card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center'>
            <img className=' w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
            <button className=' absolute text-[#CDEA68] border-[#CDEA68] px-3 py-1 rounded-full border-[1px] left-10 bottom-10 tracking-tighter'>&copy; 2019-2022</button>
        </div>
        </div>
        <div className='cardcontainer h-[50vh] flex gap-5 w-1/2'>
        <div className='card rounded-xl w-1/2 h-full bg-[#192826]'></div>
        <div className='card rounded-xl w-1/2 h-full bg-[#192826]'></div>
        </div>      
    </div>
  )
}

export default Cards
