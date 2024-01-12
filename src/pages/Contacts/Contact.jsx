import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <main>

      {/* section 1*/}
      <section>
        <div className="all flex justify-evenly lg:py-[80px] sm:flex-wrap sm:gap-[40px] sm:p-[14px]">
          <div className="left mt-[10px]">
            <p className="text-[18px] font-bold">Contact info</p>
            <h1 className="text-[30px] font-bold text-[#1E212C]">
              Get in touch
            </h1>

            <div className="flex mt-[20px]">
              <div>
                <img src="src/assets/contact/icon/Chat.png" alt="" />
              </div>
              <div className="tx ml-[10px]">
                <p className="text-[gray]">Talk to us:</p>
                <h1>hello@createx.com</h1>
              </div>
            </div>
            <div className="flex mt-[20px]">
              <div>
                <img src="src/assets/contact/icon/iPhone (1).png" alt="" />
              </div>
              <div className="tx ml-[10px]">
                <p className="text-[gray]">Call us:</p>
                <h1>(405) 555-0128</h1>
              </div>
            </div>
            <div className="flex mt-[20px]">
              <div>
              <img src="src/assets/contact/icon/Pin.png" alt="" />
              </div>
              <div className="tx ml-[10px]">
                <p className="text-[gray]">Address:</p>
                <h1>2464 Royal Ln. Mesa, New Jersey 45463, USA</h1>
              </div>
            </div>

            <h1 className="mt-[30px] text-[16px] font-bold text-[#1E212C]">
              Follow us:
            </h1>
            <div className="flex w-[300px] justify-between mt-[20px]">
              <img src="src/assets/contact/icon/Vector (21).png" alt="" />
              <img src="src/assets/contact/icon/Instagram (2).png" alt="" />
              <img src="src/assets/contact/icon/Linked-In (1).png" alt="" />
              <img src="src/assets/contact/icon/telegram (1).png" alt="" />
              <img src="src/assets/contact/icon/YouTube (3).png" alt="" />
            </div>
          </div>

          <div className="right">
            <img src="src/assets/contact/image.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* section  */}
      <section >
        <div className="all flex lg:justify-evenly lg:py-[100px]  sm:flex-wrap sm:p-[24px] sm:justify-center sm:gap-[20px]">
          <div className="left">
            <img src="src/assets/contact/WOMAN.png" alt="" />
          </div>
          <div className="right">
            <p className='font-semibold'>Any questions?</p>
            <h1 className='text-[30px] font-bold'>Drop us a line</h1>
            <div className="two flex pt-[40px] sm:flex-wrap sm:gap-[20px]">
              <div>
                <h1 className='text-[#424551]'>First Name*</h1>
                <input type="text" placeholder=" Your first name" className='border-[2px] border-gray-200 rounded-[3px] p-[5px] w-[250px] outline-none' />
              </div>
              <div className='ml-[15px]'>
                <h1 className='text-[#424551]'>Last Name*</h1>
                <input type="text" placeholder=" Your last name" className='border-[2px] border-gray-200 rounded-[3px] p-[5px] w-[250px] outline-none' />
              </div>
            </div>

            <div className="two flex mt-[20px] sm:flex-wrap sm:gap-[20px]">
              <div>
                <h1 className='text-[#424551]'>Email*</h1>
                <input type="text" placeholder=" Your working email" className='border-[2px] border-gray-200 rounded-[3px] p-[5px] w-[250px] outline-none' />
              </div>
              <div className='ml-[15px]'>
                <h1 className='text-[#424551]'>Phone</h1>
                <input type="text" placeholder=" Your phone number" className='border-[2px] border-gray-200 rounded-[3px] p-[5px] w-[250px] outline-none' />
              </div>
            </div>

            <div className="two flex mt-[20px]">
              <div>
                <h1 className='text-[#424551]'>Message*</h1>
                <input type="text" placeholder=" Your working email" className='border-[2px] border-gray-200 rounded-[3px] p-[5px] w-[250px] outline-none' />
              </div>
            </div>

            <div className='flex mt-[50px] sm:flex-wrap sm:gap-[20px]'>
              <div className='flex'>
                <div className='mt-[6px]'><img src="src/img/checked.png" alt="" /></div>
                <div><h1 className='ml-[5px] w-[300px] text-[gray]'>I agree to receive communications from Createx Online School</h1></div>
              </div>
              <div>
                <button className='bg-[#FE4333] text-[#fff] font-bold px-[40px] py-[6px] rounded-[3px]'>Send message</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact
