import React from 'react'

function Cards() {
  return (
    <div className=' w-full h-screen bg-zinc-950 flex items-center px-16 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
        <div className=' card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center'>
            <img className=' w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
            <button className=' absolute text-[#CDEA68] border-[#CDEA68] px-3 py-1 font-extralight rounded-full border-[1px] left-10 bottom-10 tracking-tighter'>&copy; 2019-2022</button>
        </div>
        </div>
        <div className='cardcontainer h-[50vh] flex gap-5 w-1/2'>
        <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
        <img className=' w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
        <button className=' absolute  px-3 py-0.5 rounded-full border-[1px] font-extralight left-8 bottom-8 tracking-tighter uppercase'>rating 5.0 on clutch </button>
        </div>
        <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
        <img className='w-24' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
        <button className=' absolute  px-3 py-1 font-extralight rounded-full border-[1px] left-8 bottom-8 tracking-tighter uppercase'>Business Bootcamp alumni</button>
        </div>
        </div>      
    </div>
  )
}

export default Cards
