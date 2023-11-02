import React from 'react'
import styles from '../styles/styles'
import { FiMail, FiSmartphone } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

const SmallNav = ({ active }) => {
    return (
        <>
            <div className={`${active === true ? "hidden" : 'flex bg-slate-100 py-2 '} `} style={{transition:"all 0.5s"}}>
                <div className={`${styles.section} flex justify-between items-center`}>
                    <div className='p-2 flex w-full text-xs 800px:text-base'>
                        <div className='flex items-center pe-3'>
                            <FiMail className='me-1 text-blue-400' />
                            <p className='hover:text-blue-400 cursor-pointer'>contact@example.com</p>
                        </div>
                        <div className='flex items-center'>
                            <FiSmartphone className='me-1 text-blue-400' />
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                    <div className='hidden 800px:flex w-[10%] text-blue-300 text-lg '>
                        <BsTwitter className='me-2 hover:text-blue-500 cursor-pointer' />
                        <BiLogoFacebookCircle className='me-2 hover:text-blue-500 cursor-pointer' />
                        <AiOutlineInstagram className='me-2 hover:text-blue-500 cursor-pointer' />
                        <AiFillLinkedin className='hover:text-blue-500 cursor-pointer' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmallNav