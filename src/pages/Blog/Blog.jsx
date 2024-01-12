import { TextField } from '@mui/material'
import React from 'react'
import Card6 from '../../components/Card6'

function Blog() {
  return (
    <>
      <main>
        {/* section  1*/}
        <section className='lg:py-[80px] lg:px-[120px] sm:p-[24px]'>
          <div className='flex flex-col items-center'>
            <p className='font-[700] uppercase sm:text-center lg:text-star md:text-start'>Enjoy your studying!</p>
            <h1 className='lg:text-[46px] sm:text-[32px] font-[700] sm:text-center md:text-start lg:text-start'>Our online courses</h1>
          </div>

          <div className='flex justify-between lg:py-[60px] sm:flex-wrap sm:gap-[20px] sm:py-[40px]'>
            <div className='flex items-center gap-[10px] sm:flex-wrap '>
              <button className='border-[#F75E05] border-[1px] px-[30px] py-[10px] rounded-[4px] text-[#F75E05] flex items-start gap-[5px]'>All <span className='text-[10px]'>17</span></button>
              <button className='px-[30px] py-[10px] rounded-[4px] text-[#9A9CA5] flex items-start gap-[5px] hover:border-[#F75E05] hover:border-[1px] hover:text-[#F75E05]'>Marketing <span className='text-[10px]'>4</span></button>
              <button className='px-[30px] py-[10px] rounded-[4px] text-[#9A9CA5] flex items-start gap-[5px] hover:border-[#F75E05] hover:border-[1px] hover:text-[#F75E05]'>Management <span className='text-[10px]'>3</span></button>
              <button className='px-[30px] py-[10px] rounded-[4px] text-[#9A9CA5] flex items-start gap-[5px] hover:border-[#F75E05] hover:border-[1px] hover:text-[#F75E05]'>HR & Recruting <span className='text-[10px]'>5</span></button>
              <button className='px-[30px] py-[10px] rounded-[4px] text-[#9A9CA5] flex items-start gap-[5px] hover:border-[#F75E05] hover:border-[1px] hover:text-[#F75E05]'>Design <span className='text-[10px]'>3</span></button>
              <button className='px-[30px] py-[10px] rounded-[4px] text-[#9A9CA5] flex items-start gap-[5px] hover:border-[#F75E05] hover:border-[1px] hover:text-[#F75E05]'>Development <span className='text-[10px]'>3</span></button>
            </div>
            <TextField placeholder='Search course...         🔍' />
          </div>

          <aside className='flex flex-wrap justify-center gap-[40px]'>
            <Card6
              img={"src/assets/home/card1/image.png"}
              h1={"The Ultimate Google Ads Training Course"}
              btn={"Marketing"}
              p={"by Jerome Bell"}
              span={"$100"}
            />
            <Card6
              img={"src/assets/home/card1/photo_1_2024-01-12_11-39-08.jpg"}
              h1={"The Ultimate Google Ads Training Course"}
              btn={"Marketing"}
              p={"by Jerome Bell"}
              span={"$100"}
            />
            <Card6
              img={"src/assets/home/card1/photo_2_2024-01-12_11-39-08.jpg"}
              h1={"The Ultimate Google Ads Training Course"}
              btn={"Marketing"}
              p={"by Jerome Bell"}
              span={"$100"}
            />
            <Card6
              img={"src/assets/home/card1/photo_3_2024-01-12_11-39-08.jpg"}
              h1={"The Ultimate Google Ads Training Course"}
              btn={"Marketing"}
              p={"by Jerome Bell"}
              span={"$100"}
            />
            <Card6
              img={"src/assets/home/card1/photo_5_2024-01-12_11-39-08.jpg"}
              h1={"The Ultimate Google Ads Training Course"}
              btn={"Marketing"}
              p={"by Jerome Bell"}
              span={"$100"}
            />
            <Card6
              img={"src/assets/home/card1/photo_6_2024-01-12_11-39-08.jpg"}
              h1={"The Ultimate Google Ads Training Course"}
              btn={"Marketing"}
              p={"by Jerome Bell"}
              span={"$100"}
            />
            <Card6
              img={"src/assets/home/card1/photo_6_2024-01-12_11-39-08.jpg"}
              h1={"The Ultimate Google Ads Training Course"}
              btn={"Marketing"}
              p={"by Jerome Bell"}
              span={"$100"}
            />
            <Card6
              img={"src/assets/home/card1/photo_1_2024-01-12_11-39-08.jpg"}
              h1={"The Ultimate Google Ads Training Course"}
              btn={"Marketing"}
              p={"by Jerome Bell"}
              span={"$100"}
            />
            <Card6
              img={"src/assets/home/card1/image.png"}
              h1={"The Ultimate Google Ads Training Course"}
              btn={"Marketing"}
              p={"by Jerome Bell"}
              span={"$100"}
            />

          </aside>
        </section>
      </main>
    </>
  )
}

export default Blog
