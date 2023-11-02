import {AiFillLinkedin, AiFillSkype } from 'react-icons/ai'
import styles from '../styles/styles'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const SmallFooter = () => {
    return (
        <div className='bg-[#f1f7fd]'>
            <div className={`${styles.section} py-10 `}>
                <div className='800px:flex justify-between text-center 800px:text-left'>
                    <div>
                        <p className='text-pColor text-[15px]'>© Copyright <span className='text-black'>Medilab.</span> All Rights Reserved</p>
                        <p className='text-pColor text-[15px]'>Designed by <span className='text-[#1977cc]'>BootstrapMade</span></p>
                    </div>
                    <div>
                        <ul className='flex justify-center mt-5 800px:mt-0'>
                            <li className='me-3'><a href="#twitter" className='flex items-center justify-center text-white bg-[#1977cc] hover:bg-[#4aa1ed] w-[40px] h-[40px] rounded-full' style={{ transition: "all 0.5s" }}><BsTwitter /></a> </li>
                            <li className='me-3'><a href="#twitter" className='flex items-center justify-center text-white bg-[#1977cc] hover:bg-[#4aa1ed] w-[40px] h-[40px] rounded-full' style={{ transition: "all 0.5s" }}><BsFacebook /></a> </li>
                            <li className='me-3'><a href="#twitter" className='flex items-center justify-center text-white bg-[#1977cc] hover:bg-[#4aa1ed] w-[40px] h-[40px] rounded-full' style={{ transition: "all 0.5s" }}><BsInstagram /></a> </li>
                            <li className='me-3'><a href="#twitter" className='flex items-center justify-center text-white bg-[#1977cc] hover:bg-[#4aa1ed] w-[40px] h-[40px] rounded-full' style={{ transition: "all 0.5s" }}><AiFillSkype /></a> </li>
                            <li className='me-3'><a href="#twitter" className='flex items-center justify-center text-white bg-[#1977cc] hover:bg-[#4aa1ed] w-[40px] h-[40px] rounded-full' style={{ transition: "all 0.5s" }}><AiFillLinkedin /></a> </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SmallFooter