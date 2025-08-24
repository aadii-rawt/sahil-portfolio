import React from 'react'

const ComingSoon = () => {
    return (
        <div className='overflow-hidden w-screen h-screen'>
            <img src="/strip.png" alt="" className='absolute -top-28 -left-28 -rotate-[25deg] ' />
            <img src="/strip.png" alt="" className='absolute -bottom-24 -right-36 -rotate-[207deg] ' />

            <div className='flex items-center justify-center h-full'>
                <div>
                    <h2 className='text-zinc-800 font-black text-[88px] leading-[0.95]'>UNDER</h2>
                    <h2 className='text-zinc-800 font-black text-[88px] leading-[0.95]'>CONSTRUCTION</h2>
                    {/* <h3 className='text-zinc-500 text-5xl font-bold mt-3 pl-1'>COMING SOON</h3> */}
                </div>
            </div>
        </div>
    )
}

export default ComingSoon