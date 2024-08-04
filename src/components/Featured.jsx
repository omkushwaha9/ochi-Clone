import { delay, motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
    const cards = [useAnimation(),useAnimation()];

    const handleHover = (index) =>{
      cards[index].start({ y:"0"});
    };

    const handleHoverEnd = (index) => {
        cards[index].start({y:"100%"});
    };

    
   
    return (
        <div className='w-full py-20 bg-slate-950'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 '>
                <h1 className=' text-6xl font-["Neue_Montreal"] tracking-tight'>
                    Featured Projects
                </h1>
            </div>
            <div className='px-20'>
                <div className=' cards w-full flex gap-5 mt-10'>
                    <motion.div
                    onHoverStart={()=> handleHover(0)}
                    onHoverEnd={()=> handleHoverEnd(0)}
                    className='cardcontainer relative w-1/2 rounded-xl h-[75vh] bg-zinc-300 '>
                        <div className=' rounded-lg w-full h-full '>
                            <h1 className='absolute text-[#CDEA68] flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>

                                {"FYDE".split('').map((item, index) => 
                                <motion.span
                                initial={{y:"100%"}}
                                animate={cards[0]}
                                transition={{ ease:[0.22,1,0.36,1], delay:index * 0.05 }}
                                className=' inline-block '>{item}</motion.span>)}
                            </h1>
                            <img className='w-full h-full bg-cover rounded-xl' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png ' />
                        </div>
                    </motion.div>
                    <motion.div
                     onHoverStart={()=> handleHover(1)}
                     onHoverEnd={()=> handleHoverEnd(1)}
                    className='cardcontainer relative w-1/2 rounded-xl h-[75vh] '>
                        <div className=' rounded-xl w-full h-full'>
                            <h1 className='absolute text-[#CDEA68] flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>

                                {"VISE".split('').map((item, index) => 
                                <motion.span
                                initial={{y:"100%"}}
                                animate={cards[1]}
                                transition={{ ease:[0.22,1,0.36,1], delay:index * 0.05 }}
                                className=' inline-block '>{item}</motion.span>)}
                            </h1>
                            <img className='w-full h-full bg-cover rounded-xl' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg' />
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Featured
