import React from 'react'
import { AiFillPlayCircle, AiOutlineGift } from 'react-icons/ai';
import { BiAtom, BiFingerprint } from 'react-icons/bi';

const About = () => {
    return (
        <div className='w-full flex flex-col 800px:flex-row ' id='About'>
            <div className='bg-about bg-no-repeat bg-center min-h-[500px] h-[900px] flex justify-center items-stretch 800px:w-[43%]'>
                <a href='https://www.youtube.com/watch?v=jDDaplaOz7Q' className='flex justify-center items-center text-[#1977cc] animate-bounce hover:animate-ping'><AiFillPlayCircle size={80} /></a>
            </div>
            <div className='ps-6 800px:ps-11 800px:w-[57%] 800px:pt-32'>
                <h1 className='font-bold text-3xl mb-7 text-[#2c4964]'>Enim quis est voluptatibus aliquid consequatur fugiat</h1>
                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
                <div className='mt-16'>
                    <div className='group'>
                        <div className='group-hover:bg-[#1977cc] float-left flex items-center justify-center w-[64px] h-[64px] border-2 border-[#8dc2f1] rounded-full' style={{ transition: "0.5s" }}>
                            <BiFingerprint size={30} className='text-[#1977cc] group-hover:text-white' style={{ transition: "0.5s" }} />
                        </div>
                        <h4 className='ml-[85px] mb-[10px] text-[18px] font-semibold '><a href='#home' className='text-[#343a40] hover:text-[#1977cc]' style={{ transition: "0.3s" }}>Lorem Ipsum</a></h4>
                        <p className='ml-[85px] text-[15px] text-gray-700'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                </div>
                <div className='mt-16'>
                    <div className='group'>
                        <div className='group-hover:bg-[#1977cc] float-left flex items-center justify-center w-[64px] h-[64px] border-2 border-[#8dc2f1] rounded-full' style={{ transition: "0.5s" }}>
                            <AiOutlineGift size={30} className='text-[#1977cc] group-hover:text-white' style={{ transition: "0.5s" }} />
                        </div>
                        <h4 className='ml-[85px] mb-[10px] text-[18px] font-semibold '><a href='#home' className='text-[#343a40] hover:text-[#1977cc]' style={{ transition: "0.3s" }}>Nemo Enim</a></h4>
                        <p className='ml-[85px] text-[15px] text-gray-700'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                </div>
                <div className='mt-16 mb-[85px] 800px:mb-[0px]'>
                    <div className='group'>
                        <div className='group-hover:bg-[#1977cc] float-left flex items-center justify-center w-[64px] h-[64px] border-2 border-[#8dc2f1] rounded-full' style={{ transition: "0.5s" }}>
                            <BiAtom size={30} className='text-[#1977cc] group-hover:text-white' style={{ transition: "0.5s" }} />
                        </div>
                        <h4 className='ml-[85px] mb-[10px] text-[18px] font-semibold '><a href='#home' className='text-[#343a40] hover:text-[#1977cc]' style={{ transition: "0.3s" }}>Dine Pad</a></h4>
                        <p className='ml-[85px] text-[15px] text-gray-700'>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About