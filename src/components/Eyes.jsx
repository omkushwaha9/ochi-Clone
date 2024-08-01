import React, { useEffect } from 'react'

function Eyes() {
    const [rotate, SetRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atam2(y, x) * (180/Math.PI);
            SetRotate(angle);
        })
    })

    return (
        <div className='Eyes w-full h-screen overflow-hidden'>
            <div className=' relative w-full h-full bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] '>
                <div className=' absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  '>
                    <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white '>
                        <div className=' relative w-2/3 h-2/3  items-center justify-center rounded-full bg-zinc-900 '>
                            <div className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-6  '> 
                                <div className=' w-6 h-6 rounded-full bg-zinc-100 '></div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white '>
                        <div className=' relative w-2/3 h-2/3 items-center justify-center rounded-full bg-zinc-900 '>
                            <div className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  line w-full h-6  '>
                                <div className=' w-6 h-6 rounded-full bg-zinc-100 '></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
