
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {

    const { pathname } = useLocation()
    return (
        <div>
            {/* header */}
            <header className='lg:px-[120px] lg:py-[20px] sm:p-[24px]'>
                <nav className='flex items-center justify-between sm:flex-wrap'>
                    <div className='flex items-center lg:gap-[80px] sm:gap-[24px] sm:flex-wrap'>
                        <img src="src/assets/header/logo.png" alt="" />
                        <ul className='flex items-center lg:gap-[40px] sm:gap-[5px]'>
                            <Link to="/">
                                <li style={{color: pathname == "/" ? "rgb(78, 4, 78)" : "black" }}>Home</li>
                            </Link>
                            <Link to="/about">
                                <li style={{color: pathname == "/about" ? "rgb(78, 4, 78)" : "black" }}>About us</li>
                            </Link>
                            <Link to="/courses">
                                <li style={{color: pathname == "/courses" ? "rgb(178, 1, 178)" : "black" }}>Courses</li>
                            </Link>

                            <Link to="/events">
                                <li style={{color: pathname == "/events" ? "rgb(78, 4, 78)" : "black" }}>Events</li>
                            </Link>
                            <Link to="/blog">
                                <li style={{color: pathname == "/blog" ? "rgb(78, 4, 78)" : "black" }}>Blog</li>
                            </Link>
                            <Link to="/contact">
                                <li style={{color: pathname == "/contact" ? "rgb(78, 4, 78)" : "black" }}>Contacts</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='lg:flex sm:hidden md:flex items-center gap-[36px]'>
                        <button className='bg-[#F75E05] px-[30px] py-[10px] rounded-[4px] text-white'>Get consultation</button>
                        <button className='flex items-center gap-[8px]'><img src="src/assets/header/Profile.png" alt="" />Log in / Register</button>
                    </div>
                </nav>
            </header>

            <section>
                <Outlet />
            </section>

            {/* footer */}
            <footer className='bg-[rgb(30,33,44)] text-white'>
                <main className='flex itewms-start lg:justify-between lg:p-[80px] sm:p-[40px] sm:flex-wrap sm:gap-[50px]'>
                    <div className='flex flex-col gap-[24px] items-start'>
                        <img src="src/assets/footer/logo (6).png" alt="" />
                        <p className='w-[279px] text-[12px]'>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>
                        <div className='flex items-center gap-[16px]'>
                            <img src="src/assets/footer/icons/Facebook (1).png" alt="" />
                            <img src="src/assets/footer/icons/Twitter (2).png" alt="" />
                            <img src="src/assets/footer/icons/YouTube (2).png" alt="" />
                            <img src="src/assets/footer/icons/telegram.png" alt="" />
                            <img src="src/assets/footer/icons/Instagram (1).png" alt="" />
                            <img src="src/assets/footer/icons/Linked-In.png" alt="" />
                        </div>
                    </div>

                    <ul className='flex flex-col gap-[16px]'>
                        <li>SITE MAP</li>
                        <li>About Us</li>
                        <li>Courses</li>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>Contacts</li>
                    </ul>

                    <ul className='flex flex-col gap-[16px]'>
                        <li>COURSES</li>
                        <li>Marketing</li>
                        <li>Management</li>
                        <li>HR & Recruting</li>
                        <li>Design</li>
                        <li>Development</li>
                    </ul>

                    <ul className='flex flex-col gap-[16px]'>
                        <li>CONTACT US</li>
                        <li className='flex items-center gap-[8px]'><img src="src/assets/footer/icons/iPhone.png" alt="" />(405) 555-0128</li>
                        <li className='flex items-center gap-[8px]'><img src="src/assets/footer/icons/Mail.png" alt="" />hello@createx.com</li>
                    </ul>

                    <ul className='flex flex-col gap-[30px]'>
                       <li>SIGN UP TO OUR NEWSLETTER</li>
                       <button className='bg-[rgb(255,255,255,0.12)] rounded-[4px] flex items-center gap-[173px] p-[10px] text-[#8e8c8c]'>Email address <img src="src/assets/footer/Right.png" alt="" /></button>
                       <p className='w-[300px] text-[12px]'>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                    </ul>

                    
                </main>

                <div className='bg-[rgb(41,45,55)] lg:px-[80px] lg:py-[20px] text-[rgb(169,171,175)] flex lg:justify-between md:justify-between sm:gap-[10px] items-center sm:flex-wrap sm:p-[12px] lg:text-start sm:text-center sm:justify-center'>
                    <p>© All rights reserved. Made with 💚 by Createx Studio</p>
                    <p>GO TO TOP</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
