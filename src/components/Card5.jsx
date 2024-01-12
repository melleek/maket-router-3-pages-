import React from 'react'

function Card5({ h1, p, span, h2, btn }) {
    return (
        <>
            <div className='p-[24px] w-[390px] border-[1px] flex flex-col items-start gap-[51px] rounded-[8px]'>
                <div className='flex flex-col gap-[20px]'>
                    <div>
                        <h1 className='text-[28px] text-[#FF3F3A]'>{h1}</h1>
                        <p className='text-[#787A80]'>{p}</p>
                    </div>
                    <div >
                        <h1 className='font-[600]'>{h2}</h1>
                        <p className='text-[#787A80]'>{span}</p>
                    </div>
                </div>
                <button className='border-[#F75E05] w-full border-[1px] px-[30px] py-[10px] rounded-[4px] text-[#F75E05] hover:bg-[#F75E05] hover:text-white hover:transition-all'>{btn}</button>
            </div>
        </>
    )
}

export default Card5
