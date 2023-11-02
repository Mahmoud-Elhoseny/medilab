import React, { useState } from 'react'
import styles from '../styles/styles'
import { AiFillCaretDown, AiFillCaretUp, AiOutlineQuestionCircle } from 'react-icons/ai'
const Questions = () => {
    const [activeTab, setActiveTab] = useState(0);
    const toggleTab = (tab) => {
        if (activeTab === tab) {
            setActiveTab(0);
        } else {
            setActiveTab(tab);
        }
    };
    return (
        <div className='bg-[#f1f7fd]'>
            <div className={`${styles.section} py-10 `}>
                <h1 className={`${styles.h1} text-h1Color`}>Frequently Asked Questions</h1>
                <div className='text-center flex items-center justify-center my-5'>
                    <hr className='border-y-2 w-[53px]' />
                    <hr className='border-y-2 w-[53px] border-[#1977cc] ' />
                    <hr className='border-y-2 w-[53px]' />
                </div>
                <p className='text-gray-500 text-center font-semibold pb-10'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

                <div className='800px:px-[50px]'>
                    <div className='group bg-white p-5 cursor-pointer rounded-md ' >
                        <div className=' flex items-center' onClick={() => toggleTab(1)}>
                            <AiOutlineQuestionCircle className='me-1' color='#76b5ee' size={25} />
                            <div className='flex justify-between items-center w-full '>
                                <div>
                                    <p className={` me-1  text-[17px] font-semibold group-hover:text-[#1977cc] ${activeTab === 1 ? "text-[#1977cc]" : "text-[#343a40]"}`}>Non consectetur a erat nam at lectus urna duis?</p>
                                </div>
                                <div>
                                    {activeTab === 1 ? (
                                        <AiFillCaretUp className={`${activeTab === 1 ? "text-[#1977cc]" : ""}`} size={20} />
                                    ) : <AiFillCaretDown className='group-hover:text-[#1977cc]' size={20} />}
                                </div>
                            </div>
                        </div>
                        {activeTab === 1 ? (
                            <div className='text-[#444444] mt-2 cursor-text'>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</div>
                        ) : null}
                    </div>
                </div>
                <div className='800px:px-[50px] mt-5'>
                    <div className='group bg-white p-5 cursor-pointer rounded-md ' >
                        <div className=' flex items-center' onClick={() => toggleTab(2)}>
                            <AiOutlineQuestionCircle className='me-1' color='#76b5ee' size={25} />
                            <div className='flex justify-between items-center w-full '>
                                <div>
                                    <p className={` me-1  text-[17px] font-semibold group-hover:text-[#1977cc] ${activeTab === 2 ? "text-[#1977cc]" : "text-[#343a40]"}`}>
                                        Feugiat scelerisque varius morbi enim nunc?</p>
                                </div>
                                <div>
                                    {activeTab === 2 ? (
                                        <AiFillCaretUp className={`${activeTab === 2 ? "text-[#1977cc]" : ""}`} size={20} />
                                    ) : <AiFillCaretDown className='group-hover:text-[#1977cc]' size={20} />}
                                </div>
                            </div>
                        </div>
                        {activeTab === 2 ? (
                            <div className='text-[#444444] mt-2 cursor-text'>
                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</div>
                        ) : null}
                    </div>
                </div>
                <div className='800px:px-[50px] mt-5'>
                    <div className='group bg-white p-5 cursor-pointer rounded-md ' >
                        <div className=' flex items-center' onClick={() => toggleTab(3)}>
                            <AiOutlineQuestionCircle className='me-1' color='#76b5ee' size={25} />
                            <div className='flex justify-between items-center w-full '>
                                <div>
                                    <p className={` me-1  text-[17px] font-semibold group-hover:text-[#1977cc] ${activeTab === 3 ? "text-[#1977cc]" : "text-[#343a40]"}`}>Dolor sit amet consectetur adipiscing elit?</p>
                                </div>
                                <div>
                                    {activeTab === 3 ? (
                                        <AiFillCaretUp className={`${activeTab === 3 ? "text-[#1977cc]" : ""}`} size={20} />
                                    ) : <AiFillCaretDown className='group-hover:text-[#1977cc]' size={20} />}
                                </div>
                            </div>
                        </div>
                        {activeTab === 3 ? (
                            <div className='text-[#444444] mt-2 cursor-text'>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</div>
                        ) : null}
                    </div>
                </div>
                <div className='800px:px-[50px] mt-5'>
                    <div className='group bg-white p-5 cursor-pointer rounded-md ' >
                        <div className=' flex items-center' onClick={() => toggleTab(4)}>
                            <AiOutlineQuestionCircle className='me-1' color='#76b5ee' size={25} />
                            <div className='flex justify-between items-center w-full '>
                                <div>
                                    <p className={` me-1  text-[17px] font-semibold group-hover:text-[#1977cc] ${activeTab === 4 ? "text-[#1977cc]" : "text-[#343a40]"}`}>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</p>
                                </div>
                                <div>
                                    {activeTab === 4 ? (
                                        <AiFillCaretUp className={`${activeTab === 4 ? "text-[#1977cc]" : ""}`} size={20} />
                                    ) : <AiFillCaretDown className='group-hover:text-[#1977cc]' size={20} />}
                                </div>
                            </div>
                        </div>
                        {activeTab === 4 ? (
                            <div className='text-[#444444] mt-2 cursor-text'>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.</div>
                        ) : null}
                    </div>
                </div>
                <div className='800px:px-[50px] mt-5'>
                    <div className='group bg-white p-5 cursor-pointer rounded-md ' >
                        <div className=' flex items-center' onClick={() => toggleTab(5)}>
                            <AiOutlineQuestionCircle className='me-1' color='#76b5ee' size={25} />
                            <div className='flex justify-between items-center w-full '>
                                <div>
                                    <p className={` me-1  text-[17px] font-semibold group-hover:text-[#1977cc] ${activeTab === 5 ? "text-[#1977cc]" : "text-[#343a40]"}`}>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</p>
                                </div>
                                <div>
                                    {activeTab === 5 ? (
                                        <AiFillCaretUp className={`${activeTab === 5 ? "text-[#1977cc]" : ""}`} size={20} />
                                    ) : <AiFillCaretDown className='group-hover:text-[#1977cc]' size={20} />}
                                </div>
                            </div>
                        </div>
                        {activeTab === 5 ? (
                            <div className='text-[#444444] mt-2 cursor-text'>Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.</div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions