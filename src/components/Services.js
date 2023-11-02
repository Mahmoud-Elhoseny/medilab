import React from 'react'
import styles from '../styles/styles'
import { BiDna } from 'react-icons/bi';
import { FaHeartbeat, FaHospitalUser, FaNotesMedical, FaPills, FaWheelchair } from 'react-icons/fa';

const Services = () => {
    return (
        <div id='Services' className={`${styles.section} py-10`}>
            <h1 className={`${styles.h1} text-h1Color`}>Services</h1>
            <div className='text-center flex items-center justify-center my-5'>
                <hr className='border-y-2 w-[53px]' />
                <hr className='border-y-2 w-[53px] border-[#1977cc] ' />
                <hr className='border-y-2 w-[53px]' />
            </div>
            <p className='text-gray-500 text-center font-semibold pb-10'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className='boxes'>
                <div className='top-boxes flex flex-col 800px:flex-row'>
                    <div className='group hover:bg-[#1977cc] border border-1 border-[#d5e1ed]  flex items-center text-center justify-center 800px:w-[33.33%] h-[300px]' style={{ transition: "0.5s" }}>
                        <div>
                            <div className='relative p-5'>
                                <div className=' group-hover:text-[#1977cc]  group-hover:bg-white text-white bg-[#1977cc] flex items-center justify-center rounded-md w-[64px] h-[64px] absolute -top-[25px] left-[50%] translate-x-[-50%]' style={{ transition: "0.5s" }}>
                                    <FaHeartbeat size={30} />
                                </div>
                            </div>
                            <h2 className='group-hover:text-white p-3 text-[#082744] font-semibold text-[25px]' style={{ transition: "0.5s" }} >Lorem Ipsum</h2>
                            <p className='group-hover:text-white text-gray-700' style={{ transition: "0.5s" }}>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>
                    <div className='group my-6 800px:mx-6 800px:my-0  hover:bg-[#1977cc] border border-1 border-[#d5e1ed]  flex items-center text-center justify-center 800px:w-[33.33%] h-[300px]' style={{ transition: "0.5s" }}>
                        <div>
                            <div className='relative p-5'>
                                <div className=' group-hover:text-[#1977cc]  group-hover:bg-white text-white bg-[#1977cc] flex items-center justify-center rounded-md w-[64px] h-[64px] absolute -top-[25px] left-[50%] translate-x-[-50%]' style={{ transition: "0.5s" }}>
                                    <FaPills size={30} />
                                </div>
                            </div>
                            <h2 className='group-hover:text-white p-3 text-[#082744] font-semibold text-[25px]' style={{ transition: "0.5s" }} >Sed ut perspiciatis</h2>
                            <p className='group-hover:text-white text-gray-700' style={{ transition: "0.5s" }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>
                    <div className='group hover:bg-[#1977cc] border border-1 border-[#d5e1ed]  flex items-center text-center justify-center 800px:w-[33.33%] h-[300px]' style={{ transition: "0.5s" }}>
                        <div>
                            <div className='relative p-5'>
                                <div className=' group-hover:text-[#1977cc]  group-hover:bg-white text-white bg-[#1977cc] flex items-center justify-center rounded-md w-[64px] h-[64px] absolute -top-[25px] left-[50%] translate-x-[-50%]' style={{ transition: "0.5s" }}>
                                    <FaHospitalUser size={30} />
                                </div>
                            </div>
                            <h2 className='group-hover:text-white p-3 text-[#082744] font-semibold text-[25px]' style={{ transition: "0.5s" }} >Magni Dolores</h2>
                            <p className='group-hover:text-white text-gray-700' style={{ transition: "0.5s" }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>
                </div>

                <div className='bottom-boxes pt-6 flex flex-col 800px:flex-row'>
                    <div className='group hover:bg-[#1977cc] border border-1 border-[#d5e1ed]  flex items-center text-center justify-center 800px:w-[33.33%] h-[300px]' style={{ transition: "0.5s" }}>
                        <div>
                            <div className='relative p-5'>
                                <div className=' group-hover:text-[#1977cc]  group-hover:bg-white text-white bg-[#1977cc] flex items-center justify-center rounded-md w-[64px] h-[64px] absolute -top-[25px] left-[50%] translate-x-[-50%]' style={{ transition: "0.5s" }}>
                                    <BiDna size={30} />
                                </div>
                            </div>
                            <h2 className='group-hover:text-white p-3 text-[#082744] font-semibold text-[25px]' style={{ transition: "0.5s" }} >Nemo Enim</h2>
                            <p className='group-hover:text-white text-gray-700' style={{ transition: "0.5s" }}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>
                    <div className='group my-6  800px:mx-6 800px:my-0 hover:bg-[#1977cc] border border-1 border-[#d5e1ed]  flex items-center text-center justify-center 800px:w-[33.33%] h-[300px]' style={{ transition: "0.5s" }}>
                        <div>
                            <div className='relative p-5'>
                                <div className=' group-hover:text-[#1977cc]  group-hover:bg-white text-white bg-[#1977cc] flex items-center justify-center rounded-md w-[64px] h-[64px] absolute -top-[25px] left-[50%] translate-x-[-50%]' style={{ transition: "0.5s" }}>
                                    <FaWheelchair size={30} />
                                </div>
                            </div>
                            <h2 className='group-hover:text-white p-3 text-[#082744] font-semibold text-[25px]' style={{ transition: "0.5s" }} >Dele cardo</h2>
                            <p className='group-hover:text-white text-gray-700' style={{ transition: "0.5s" }}>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                        </div>
                    </div>
                    <div className='group hover:bg-[#1977cc] border border-1 border-[#d5e1ed]  flex items-center text-center justify-center 800px:w-[33.33%] h-[300px]' style={{ transition: "0.5s" }}>
                        <div>
                            <div className='relative p-5'>
                                <div className=' group-hover:text-[#1977cc]  group-hover:bg-white text-white bg-[#1977cc] flex items-center justify-center rounded-md w-[64px] h-[64px] absolute -top-[25px] left-[50%] translate-x-[-50%]' style={{ transition: "0.5s" }}>
                                    <FaNotesMedical size={30} />
                                </div>
                            </div>
                            <h2 className='group-hover:text-white p-3 text-[#082744] font-semibold text-[25px]' style={{ transition: "0.5s" }} >Divera don</h2>
                            <p className='group-hover:text-white text-gray-700' style={{ transition: "0.5s" }}> Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Services