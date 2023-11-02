import styles from '../styles/styles'
import { FaUserDoctor } from "react-icons/fa6";
import { BsFillAwardFill, BsFillHospitalFill } from 'react-icons/bs';
import { BiSolidFlask } from 'react-icons/bi';
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const Numbers = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className='bg-[#f1f7fd] pt-[60px] pb-[20px] -mt-[40px] '>
                <section className={`${styles.section} flex text-center pt-5 flex-col 800px:flex-row 800px:pt-0 800px:pl-[50px]`}>
                    <div className='box  800px:w-[25%] pb-11 800px:pe-7'>
                        <div className='relative'>
                            <div className='bg-white pb-[30px] pt-[30px] text-center'>
                                <div className='text-white bg-[#1977cc] flex items-center justify-center w-[48px] h-[48px] rounded-full absolute -top-[25px] left-[50%] translate-x-[-50%] '>
                                    <FaUserDoctor size={25} />
                                </div>
                                <h1 className='font-semibold text-[40px] text-[#082744]'>
                                    {counterOn && <CountUp start={0} end={85} duration={6} delay={0} />}</h1>
                                <p>Doctors</p>
                            </div>
                        </div>
                    </div>
                    <div className='box  800px:w-[25%] pb-11 800px:pe-7'>
                        <div className='relative'>
                            <div className='bg-white pb-[30px] pt-[30px] text-center'>
                                <div className='text-white bg-[#1977cc] flex items-center justify-center w-[48px] h-[48px] rounded-full absolute -top-[25px] left-[50%] translate-x-[-50%] '>
                                    <BsFillHospitalFill size={25} />
                                </div>
                                <h1 className='font-semibold text-[40px] text-[#082744]'>
                                    {counterOn && <CountUp start={0} end={18} duration={6} delay={0} />}</h1>
                                <p>Departments</p>
                            </div>
                        </div>
                    </div>
                    <div className='box 800px:w-[25%] pb-11 800px:pe-7'>
                        <div className='relative'>
                            <div className='bg-white pb-[30px] pt-[30px] text-center'>
                                <div className='text-white bg-[#1977cc] flex items-center justify-center w-[48px] h-[48px] rounded-full absolute -top-[25px] left-[50%] translate-x-[-50%] '>
                                    <BiSolidFlask size={25} />
                                </div>
                                <h1 className='font-semibold text-[40px] text-[#082744]'>
                                    {counterOn && <CountUp start={0} end={12} duration={6} delay={0} />}</h1>
                                <p>Research Labs</p>
                            </div>
                        </div>
                    </div>
                    <div className='box 800px:w-[25%] 800px:pe-7'>
                        <div className='relative'>
                            <div className='text-white bg-[#1977cc] flex items-center justify-center w-[48px] h-[48px] rounded-full absolute -top-[25px] left-[50%] translate-x-[-50%] '>
                                <BsFillAwardFill size={25} />
                            </div>
                        </div>
                        <div className='bg-white pb-[30px] pt-[30px] text-center'>
                            <h1 className='font-semibold text-[40px] text-[#082744]'>
                                {counterOn && <CountUp start={0} end={150} duration={6} delay={0} />}</h1>
                            <p>Awards</p>
                        </div>
                    </div>
                </section>
            </div>
        </ScrollTrigger>
    )
}

export default Numbers