import React from 'react'
import styles from '../styles/styles'
import doctors1 from '../assets/imgs/doctors/doctors-1.jpg'
import doctors2 from '../assets/imgs/doctors/doctors-2.jpg'
import doctors3 from '../assets/imgs/doctors/doctors-3.jpg'
import doctors4 from '../assets/imgs/doctors/doctors-4.jpg'
import { BsTwitter } from 'react-icons/bs';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
const Doctors = () => {
    return (
        <div id='Doctors' className={`${styles.section} py-10 `}>
            <h1 className={`${styles.h1} text-h1Color`}>Doctors</h1>
            <div className='text-center flex items-center justify-center my-5'>
                <hr className='border-y-2 w-[53px]' />
                <hr className='border-y-2 w-[53px] border-[#1977cc] ' />
                <hr className='border-y-2 w-[53px]' />
            </div>
            <p className='text-gray-500 text-center font-semibold pb-10'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className='cards'>
                <div className='top-cards w-full flex flex-col 800px:flex-row'>
                    <div className='group 800px:w-[49%] border shadow-lg p-10 rounded-2xl 800px:me-5'>
                        <div className='float-left w-[30%] rounded-full me-4 overflow-hidden'>
                            <img src={doctors1} alt="doctors1" className=' group-hover:scale-125 ' style={{ transition: "all 0.5s" }} />
                        </div>
                        <h2 className='text-h1Color font-semibold text-[23px] pb-2'>Walter White</h2>
                        <span className='text-pColor'>Chief Medical Officer</span>
                        <hr className='mt-2 w-14' />
                        <p className='text-pColor'>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        <div className='flex pt-2 '>
                            <a href="#twitter" className='flex items-center justify-center text-white  hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <BsTwitter />
                            </a>
                            <a href="#facebook" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <BiLogoFacebookCircle />
                            </a>
                            <a href="insta" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <AiOutlineInstagram />
                            </a>
                            <a href="linkedin" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full' style={{ transition: "all 0.5s" }}>
                                <AiFillLinkedin className='' />
                            </a>
                        </div>
                    </div>
                    <div className='group 800px:w-[49%] border shadow-lg p-10 rounded-2xl'>
                        <div className='float-left w-[30%] rounded-full me-4 overflow-hidden'>
                            <img src={doctors2} alt="doctors2" className=' group-hover:scale-125 ' style={{ transition: "all 0.5s" }} />
                        </div>
                        <h2 className='text-h1Color font-semibold text-[23px] pb-2'>Sarah Jhonson</h2>
                        <span className='text-pColor'>Anesthesiologist</span>
                        <hr className='mt-2 w-14' />
                        <p className='text-pColor'>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                        <div className='flex pt-2 '>
                            <a href="#twitter" className='flex items-center justify-center text-white  hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <BsTwitter />
                            </a>
                            <a href="#facebook" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <BiLogoFacebookCircle />
                            </a>
                            <a href="insta" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <AiOutlineInstagram />
                            </a>
                            <a href="linkedin" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full' style={{ transition: "all 0.5s" }}>
                                <AiFillLinkedin className='' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bottom-cards 800px:pt-6 flex flex-col 800px:flex-row'>
                    <div className='group 800px:w-[49%] border shadow-lg p-10 rounded-2xl 800px:me-5'>
                        <div className='float-left w-[30%] rounded-full me-4 overflow-hidden'>
                            <img src={doctors3} alt="doctors3" className=' group-hover:scale-125 ' style={{ transition: "all 0.5s" }} />
                        </div>
                        <h2 className='text-h1Color font-semibold text-[23px] pb-2'>William Anderson</h2>
                        <span className='text-pColor'>Cardiology</span>
                        <hr className='mt-2 w-14' />
                        <p className='text-pColor'>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                        <div className='flex pt-2 '>
                            <a href="#twitter" className='flex items-center justify-center text-white  hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <BsTwitter />
                            </a>
                            <a href="#facebook" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <BiLogoFacebookCircle />
                            </a>
                            <a href="insta" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <AiOutlineInstagram />
                            </a>
                            <a href="linkedin" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full' style={{ transition: "all 0.5s" }}>
                                <AiFillLinkedin className='' />
                            </a>
                        </div>
                    </div>
                    <div className='group 800px:w-[49%] border shadow-lg p-10 rounded-2xl'>
                        <div className='float-left w-[30%] rounded-full me-4 overflow-hidden'>
                            <img src={doctors4} alt="doctors4" className=' group-hover:scale-125 ' style={{ transition: "all 0.5s" }} />
                        </div>
                        <h2 className='text-h1Color font-semibold text-[23px] pb-2'>Amanda Jepson</h2>
                        <span className='text-pColor'>Neurosurgeon</span>
                        <hr className='mt-2 w-14' />
                        <p className='text-pColor'>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                        <div className='flex pt-2 '>
                            <a href="#twitter" className='flex items-center justify-center text-white  hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <BsTwitter />
                            </a>
                            <a href="#facebook" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <BiLogoFacebookCircle />
                            </a>
                            <a href="insta" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full me-2' style={{ transition: "all 0.5s" }}>
                                <AiOutlineInstagram />
                            </a>
                            <a href="linkedin" className='flex items-center justify-center text-white hover:bg-[#1977cc] bg-iconsBg w-[32px] h-[32px] rounded-full' style={{ transition: "all 0.5s" }}>
                                <AiFillLinkedin className='' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Doctors