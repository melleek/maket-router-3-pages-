import React from 'react'

function Card6({ img, btn, h1, p, span }) {
    return (
        <>
            <div className='border-[1px]  items-center sm:w-[300px] rounded-[8px] shadow-2xl'>
                <aside>
                    <img src={img} className='w-[100%]' />
                </aside>
                <aside className='p-[22px] flex flex-col gap-[30px]'>
                    <div>
                        <button className='bg-[#03CEA4] px-[12px] rounded-[5px] py-[6px] text-white'>{btn}</button>
                    </div>
                    <h1 className='text-[18px] font-[700]'>{h1}</h1>
                    <p className='text-[#787A80]'><span className='text-[#FF4242]'>{span}</span> | {p}</p>
                </aside>
            </div>
        </>
    )
}

export default Card6
