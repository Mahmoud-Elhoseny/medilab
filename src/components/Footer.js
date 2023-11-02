import React from 'react'
import styles from '../styles/styles'
import { BsChevronRight } from 'react-icons/bs'
import SmallFooter from './SmallFooter.jsx'
const Footer = () => {
    return (
        <>
            <div className='shadow-inner'>
                <div className={`${styles.section} py-10`}>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
                        <ul>
                            <h1 className='text-[30px] mb-2'>Medilab</h1>
                            <li className='text-pColor'>A108 Adam Street</li>
                            <li className='text-pColor'>New York, NY 535022</li>
                            <li className='text-pColor'>United States</li>
                            <br />
                            <li className='text-pColor'><span className='font-semibold'>Phone:</span> +1 5589 55488 55</li>
                            <li className='text-pColor'><span className='font-semibold'>Email:</span> info@example.com</li>
                        </ul>
                        <ul>
                            <h1 className='text-[18px] mb-2 font-medium mt-5 800px:mt-0'>Useful Links</h1>
                            <li className='flex  items-center text-pColor mb-3'><BsChevronRight size={13} className='text-arrowColor me-1' /><a href='#Home' className='hover:text-[#1977cc]'>Home</a></li>
                            <li className='flex  items-center text-pColor mb-3'><BsChevronRight size={13} className='text-arrowColor me-1' /><a href="#About" className='hover:text-[#1977cc]'>About us</a></li>
                            <li className='flex  items-center text-pColor mb-3'><BsChevronRight size={13} className='text-arrowColor me-1' /><a href="#Services" className='hover:text-[#1977cc]'>Services</a></li>
                            <li className='flex  items-center text-pColor mb-3'><BsChevronRight size={13} className='text-arrowColor me-1' /><a href="#1" className='hover:text-[#1977cc]'>Terms of service</a></li>
                            <li className='flex  items-center text-pColor'><BsChevronRight size={13} className='text-arrowColor me-1' /><a href="#1" className='hover:text-[#1977cc]'>Privacy policy</a></li>
                        </ul>
                        <ul>
                            <h1 className='text-[18px] mb-2 font-medium mt-5 800px:mt-0'>Our Services</h1>
                            <li className='flex  items-center text-pColor mb-3'><BsChevronRight size={13} className='text-arrowColor me-1' /><a href='#Home' className='hover:text-[#1977cc]'>Web Design</a></li>
                            <li className='flex  items-center text-pColor mb-3'><BsChevronRight size={13} className='text-arrowColor me-1' /><a href="#1" className='hover:text-[#1977cc]'>Web Development</a></li>
                            <li className='flex  items-center text-pColor mb-3'><BsChevronRight size={13} className='text-arrowColor me-1' /><a href="#1" className='hover:text-[#1977cc]'>Product Management</a></li>
                            <li className='flex  items-center text-pColor mb-3'><BsChevronRight size={13} className='text-arrowColor me-1' /><a href="#1" className='hover:text-[#1977cc]'>Marketing</a></li>
                            <li className='flex  items-center text-pColor'><BsChevronRight size={13} className='text-arrowColor me-1' /><a href="#1" className='hover:text-[#1977cc]'>Graphic Design</a></li>
                        </ul>
                        <ul>
                            <h1 className='text-[18px] mb-2 font-medium mt-5 800px:mt-0'>Join Our Newsletter</h1>
                            <li className='flex items-center  mb-10'><p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p></li>
                            <li>
                                <form className=' relative flex border-2 border-blue-400 rounded-3xl w-[100%] h-[40px] text-center'>
                                    <input className='ml-[5px] w-[96%] bg-transparent h-[25px] mt-1' type="email" />
                                    <input className=' w-[50%] text-white text-center top-0 right-0 left-0 bottom-0 border-0 bg-[#1977cc] rounded-3xl hover:bg-[#4aa1ed]' type="submit" value='Subscribe' style={{ transition: "0.5s" }} />
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <SmallFooter />
        </>
    )
}

export default Footer