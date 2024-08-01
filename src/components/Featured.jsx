import React from 'react'

function Featured() {
    return (
        <div className='w-full py-20 bg-slate-950'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 '>
                <h1 className=' text-6xl font-["Neue_Montreal"] tracking-tight'>
                    Featured Projects
                </h1>
            </div>
            <div className='px-20'>
                <div className=' cards w-full flex gap-5 mt-10'>
                    <div className='cardcontainer w-1/2 rounded-xl h-[75vh] bg-zinc-300 overflow-hidden'>
                    <div className='scale-75 rounded-lg w-full h-full '>
                        <img className='w-full h-full bg-cover rounded-xl' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png ' />
                    </div>
                    </div>
                    <div className='cardcontainer w-1/2 rounded-xl h-[75vh] overflow-hidden'>
                    <div className=' rounded-xl w-full h-full'>
                    <img className='w-full h-full bg-cover rounded-xl' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg' />
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured
