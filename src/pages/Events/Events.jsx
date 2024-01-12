import { TextField } from '@mui/material'
import React from 'react'
import Card3 from '../../components/Card3'

function Events() {
  return (
    <div>
      <main>
        {/* section 1 */}
        <section className='lg:py-[80px] lg:px-[120px] sm:p-[24px]'>
          <div className='flex flex-col items-center'>
            <p className='font-[700] uppercase sm:text-center lg:text-star md:text-start'>Our events</p>
            <h1 className='lg:text-[46px] sm:text-[32px] font-[700] sm:text-center md:text-start lg:text-start'>Lectures, workshops & master-classes</h1>
          </div>
          <div className='items-center flex justify-between lg:py-[50px]'>
            <div className='flex items-center gap-[10px]'>
              <p>Event category</p>
              <TextField placeholder='all themes' />
            </div>


            <div className='flex items-center gap-[10px]'>
              <p>Sort by</p>
              <TextField placeholder='newest' />
            </div>


            <div className='flex items-center gap-[10px]'>
              <p>Show</p>
              <TextField placeholder='9' />
            </div>

            <div className='flex items-center gap-[10px]'>
              <p>events per page</p>
              <TextField placeholder='Search event...' />
            </div>
          </div>

          <div className='flex flex-col items-center lg:py-[20px] gap-[20px] sm:flex-wrap'>
            <Card3 number={"05"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
            <Card3 number={"24"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
            <Card3 number={"16"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
            <Card3 number={"10"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
            <Card3 number={"27"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
            <Card3 number={"15"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
            <Card3 number={"02"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
            <Card3 number={"29"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
            <Card3 number={"18"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
          </div>
        </section>

        {/* section 8 */}
        <section className=' bg-[rgb(254,222,207)]'>
          <div className='flex flex-col items-center lg:py-[80px] lg:px-[120px] sm:p-[24px]'>
            <p className='font-[700] uppercase text-center'>Don’t miss anything</p>
            <h1 className='lg:text-[46px] lg:w-[820px]  sm:text-[32px] font-[700] text-center'>Subscribe to the Createx School announcements</h1>
          </div>
          <div className='flex justify-between items-start'>
            <img src="src/assets/home/illustration (2).png" alt="" />
            <aside className='justify-center flex items-center gap-[40px] sm:flex-wrap sm:pt-[24px]'>
              <input type="text" placeholder='Your working email' className='px-[10px] w-[300px] py-[12px] rounded-[4px]' />
              <button className='bg-[#F75E05] border-[1px] px-[30px] py-[10px] rounded-[4px] text-[#fff]'>Subscribe</button>
            </aside>
            <img src="src/assets/home/illustration (2).png" alt="" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Events
