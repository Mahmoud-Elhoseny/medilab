import React from 'react';
import styles from '../styles/styles';
import { AiOutlineGift } from 'react-icons/ai';
const Gallery = () => {


    return (
        <>
            <div id='Contact' className={`${styles.section} py-10 `}>
                <h1 className={`${styles.h1} text-h1Color`}>Contact</h1>
                <div className='text-center flex items-center justify-center my-5'>
                    <hr className='border-y-2 w-[53px]' />
                    <hr className='border-y-2 w-[53px] border-[#1977cc] ' />
                    <hr className='border-y-2 w-[53px]' />
                </div>
                <p className='text-gray-500 text-center font-semibold'>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
            </div>
            <div>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185087754!2d31.340866179265863!3d30.059611342953684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1698765341488!5m2!1sar!2seg" width="100%" height="300" allowFullScreen='' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={`${styles.section} pt-14 `}>
                <div className='block 800px:flex justify-between items-center'>
                    <div className='w-full 800px:w-[30%]'>
                        <div className='group mb-10'>
                            <div className='group-hover:bg-[#1977cc] float-left flex items-center justify-center bg-[#d6e9fa] w-[50px] h-[50px]  rounded-full' style={{ transition: "0.5s" }}>
                                <AiOutlineGift size={25} className='text-[#1977cc] group-hover:text-white' style={{ transition: "0.5s" }} />
                            </div>
                            <h4 className='ml-[70px] mb-[5px] text-[25px] font-semibold text-[#2c4964]'>Location:</h4>
                            <p className='ml-[70px] text-[15px] text-[#4b7dab]'>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div className='group mb-10'>
                            <div className='group-hover:bg-[#1977cc] float-left flex items-center justify-center bg-[#d6e9fa] w-[50px] h-[50px]  rounded-full' style={{ transition: "0.5s" }}>
                                <AiOutlineGift size={25} className='text-[#1977cc] group-hover:text-white' style={{ transition: "0.5s" }} />
                            </div>
                            <h4 className='ml-[70px] mb-[5px] text-[25px] font-semibold text-[#2c4964]'>Email:</h4>
                            <p className='ml-[70px] text-[15px] text-[#4b7dab]'>info@example.com</p>
                        </div>
                        <div className='group mb-7 800px:mb-0'>
                            <div className='group-hover:bg-[#1977cc] float-left flex items-center justify-center bg-[#d6e9fa] w-[50px] h-[50px]  rounded-full' style={{ transition: "0.5s" }}>
                                <AiOutlineGift size={25} className='text-[#1977cc] group-hover:text-white' style={{ transition: "0.5s" }} />
                            </div>
                            <h4 className='ml-[70px] mb-[5px] text-[25px] font-semibold text-[#2c4964]'>Call:</h4>
                            <p className='ml-[70px] text-[15px] text-[#4b7dab]'>+1 5589 55488 55s</p>
                        </div>
                    </div>
                    <div className='w-full 800px:w-[70%]'>
                        <form>
                            <div className='inputs'>
                                <div className='top-inputs w-full flex flex-col 800px:flex-row'>
                                    <input type="text" placeholder='Your Name' className='w-full my-2 800px:w-[50%] 800px:my-0 800px:me-6 p-[10px]  border-2 border-gray-200' />
                                    <input type="email" placeholder='Your Email' className='w-full my-2 800px:w-[50%] 800px:my-0 800px:me-6 p-[10px] border-2 border-gray-200' />
                                </div>
                                <div className='bottom-inputs 800px:pt-6 flex flex-col 800px:flex-row'>
                                    <input type="text" placeholder='Subject' className='w-full my-2 800px:my-0 800px:me-6 p-[10px] border-2 border-gray-200' />
                                </div>
                                <div className='pt-2 800px:pt-6'>
                                    <textarea className='w-full 800px:w-[98%] p-2 border-2 border-gray-200' placeholder='Message' cols="90" rows="5"></textarea>
                                </div>
                            </div>
                        </form>
                        <div className='text-center py-8'>
                            <a href='#Appointment' className=' rounded-3xl'
                                style={{ background: "rgb(25, 119, 204) ", color: "rgb(255, 255, 255)", padding: "12px 40px" }}>
                                Send Message
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;