import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import styles from '../styles/styles';
import { BiCubeAlt, BiReceipt } from 'react-icons/bi';
import { FaRegImages } from 'react-icons/fa';

const Cards = () => {
    return (
        <div className={`${styles.section} flex`}>
            <div className='-mt-[260px] flex flex-col 800px:flex-row'>
                <div className='bg-[#1977cc] w-full 800px:w-[70%] h-[400px] rounded-md text-white'>
                    <h2 className='p-6 text-[32px] font-semibold 800px:text-[40px]'>
                        Why Choose <br /> Medilab?
                    </h2>
                    <p className='px-6 text-[14px] 800px:text-[16px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                        Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                    </p>
                    <div className='mt-6 flex justify-center'>
                        <a
                            href="#Home"
                            className='w-[200px] h-[40px] duration-[0.5s] text-center flex items-center justify-center
              bg-[#5ca2e0] hover:bg-white hover:text-[#1977cc]
              text-white text-[14px] rounded-[50px] font-medium cursor-pointer'>
                            Learn More <BsArrowRightShort />
                        </a>
                    </div>
                </div>

                <div className='flex flex-col items-center  pb-22 800px:mt-0 800px:flex-row 800px:pl-5 '>
                    <div className='bg-[#fff] w-full h-[270px] text-center items-center text-black rounded-lg mb-6 800px:w-[30%] 800px:h-[320px] shadow-xl 800px:mb-0 800px:me-6 p-12'>
                        <div className='flex flex-col items-center'>
                            <BiReceipt size={40} color='#1977cc' className='mb-5' />
                            <h2 className='mb-8 text-[18px] font-bold'>Corporis voluptates sit</h2>
                            <p className='text-[#848484]'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                    </div>
                    <div className='bg-[#fff] w-full  h-[270px] text-center items-center text-black rounded-lg mb-6 800px:h-[320px] shadow-xl 800px:w-[30%] 800px:mb-0 800px:me-6 p-12'>
                        <div className='flex flex-col items-center'>
                            <BiCubeAlt size={40} color='#1977cc' className='mb-5' />
                            <h2 className='mb-8 text-[18px] font-bold'>Ullamco laboris ladore pan</h2>
                            <p className='text-[#848484]'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                    </div>
                    <div className='bg-[#fff] w-full h-[270px] text-center items-center text-black rounded-lg mb-6 800px:w-[30%] 800px:h-[320px] shadow-xl 800px:mb-0 800px:me-6 p-12'>
                        <div className='flex flex-col items-center '>
                            <FaRegImages size={40} color='#1977cc' className='mb-5' />
                            <h2 className='mb-8 text-[18px] font-bold'>Labore consequatur</h2>
                            <p className='text-[#848484]'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;