import React from 'react'
import styles from '../styles/styles'
const Appointment = () => {
    return (
        <div className='bg-[#f1f7fd]'>
            <div className={`${styles.section} py-10 `}>
                <h1 className={`${styles.h1} text-h1Color`}>Make an Appointment</h1>
                <div className='text-center flex items-center justify-center my-5'>
                    <hr className='border-y-2 w-[53px]' />
                    <hr className='border-y-2 w-[53px] border-[#1977cc] ' />
                    <hr className='border-y-2 w-[53px]' />
                </div>
                <p className='text-gray-500 text-center font-semibold pb-10'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <form>
                    <div className='inputs'>
                        <div className='top-inputs w-full flex flex-col 800px:flex-row'>
                            <input type="text" placeholder='Your Name' className='w-full my-2 800px:w-[33%] 800px:my-0 800px:me-6 p-[10px]' />
                            <input type="text" placeholder='Your Email' className='w-full my-2 800px:w-[33%] 800px:my-0 800px:me-6 p-[10px]' />
                            <input type="text" placeholder='Your Phone' className='w-full my-2 800px:w-[33%] 800px:my-0 p-[10px]' />
                        </div>
                        <div className='bottom-inputs 800px:pt-6 flex flex-col 800px:flex-row'>
                            <input type="text" placeholder='Appointment Date' className='w-full my-2 800px:w-[33%] 800px:my-0 800px:me-6 p-[10px]' />
                            <select name='department' className='w-full my-2 800px:w-[33%] 800px:my-0 800px:me-6 p-[10px]' >
                                <option>Select Department</option>
                                <option value='Department 1'>Department 1</option>
                                <option value='Department 2'>Department 2</option>
                                <option value='Department 3'>Department 3</option>
                            </select>
                            <select name='Doctor' className='w-full my-2 800px:w-[33%] 800px:my-0 p-[10px]'  >
                                <option>Select Doctor</option>
                                <option value='Department 1'>Doctor 1</option>
                                <option value='Department 2'>Doctor 2</option>
                                <option value='Department 3'>Doctor 3</option>
                            </select>
                        </div>
                        <div className='pt-2 800px:pt-6'>
                            <textarea className='w-full p-2' placeholder='Message (Optional)' cols="90" rows="5"></textarea>
                        </div>
                    </div>
                </form>
                <div className='text-center py-8'>
                    <a href='#Appointment' className=' rounded-3xl'
                        style={{ background: "rgb(25, 119, 204) ", color: "rgb(255, 255, 255)", padding: "8px 20px" }}>
                        Make an Appointment
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Appointment