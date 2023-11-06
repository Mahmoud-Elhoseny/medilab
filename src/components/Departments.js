import React, { useState } from 'react';
import styles from '../styles/styles';
import CardiologyImg from '../assets/imgs/departments-1.jpg'
import NeurologyImg from '../assets/imgs/departments-2.jpg'
import HepatologyImg from '../assets/imgs/departments-3.jpg'
import PediatricsImg from '../assets/imgs/departments-4.jpg'
import EyeCareImg from '../assets/imgs/departments-5.jpg'

const Departments = () => {
    const [active, setActive] = useState(0);

    return (
        <div id='Departments' className={`${styles.section} py-10  `} >
            <h1 className={`${styles.h1} text-h1Color`}>Departments</h1>
            <div className='text-center flex  items-center justify-center my-5'>
                <hr className='border-y-2 w-[53px]' />
                <hr className='border-y-2 w-[53px] border-[#1977cc] ' />
                <hr className='border-y-2 w-[53px]' />
            </div>
            <p className='text-gray-500 text-center font-semibold pb-10'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className='flex w-full flex-col 800px:flex-row '>
                <div className=' w-[100%] 800px:w-[20%] text-h1Color font-semibold'>
                    <p className={`p-2 800px:p-0 800px:bg-white bg-[#1977cc] text-black mt-5 800px:mt-0 w-full cursor-pointer 800px:hover:text-[#1977cc] 800px:pt-5 ${active === 0 ? 'text-white 800px:text-[#1977cc]' : ''}`} onClick={() => setActive(0)}>Cardiology</p>
                    <p className={`p-2 800px:p-0 800px:bg-white bg-[#1977cc] text-black mt-5 800px:mt-0 w-full cursor-pointer 800px:hover:text-[#1977cc] 800px:pt-5 ${active === 1 ? 'text-white 800px:text-[#1977cc]' : ''}`} onClick={() => setActive(1)}>Neurology</p>
                    <p className={`p-2 800px:p-0 800px:bg-white bg-[#1977cc] text-black mt-5 800px:mt-0 w-full cursor-pointer 800px:hover:text-[#1977cc] 800px:pt-5 ${active === 2 ? 'text-white 800px:text-[#1977cc]' : ''}`} onClick={() => setActive(2)}>Hepatology</p>
                    <p className={`p-2 800px:p-0 800px:bg-white bg-[#1977cc] text-black mt-5 800px:mt-0 w-full cursor-pointer 800px:hover:text-[#1977cc] 800px:pt-5 ${active === 3 ? 'text-white 800px:text-[#1977cc]' : ''}`} onClick={() => setActive(3)}>Pediatrics</p>
                    <p className={`p-2 800px:p-0 800px:bg-white bg-[#1977cc] text-black mt-5 800px:mt-0 w-full cursor-pointer 800px:hover:text-[#1977cc] 800px:pt-5 ${active === 4 ? 'text-white 800px:text-[#1977cc]' : ''}`} onClick={() => setActive(4)}>Eye Care</p>
                </div>
                <div className='w-[10%] mt-5 hidden 800px:block'>
                    <hr className={`w-[2px] h-10 ${active === 0 ? 'border-2 border-[#1977cc]' : 'border-2'}`} />
                    <hr className={`w-[2px] h-10 ${active === 1 ? 'border-2 border-[#1977cc]' : 'border-2'}`} />
                    <hr className={`w-[2px] h-10 ${active === 2 ? 'border-2 border-[#1977cc]' : 'border-2'}`} />
                    <hr className={`w-[2px] h-10 ${active === 3 ? 'border-2 border-[#1977cc]' : 'border-2'}`} />
                    <hr className={`w-[2px] h-10 ${active === 4 ? 'border-2 border-[#1977cc]' : 'border-2'}`} />
                </div>
                {active === 0 ? <div className=' w-full 800px:w-[50%] pt-10 800px:pt-0'>
                    <h1 className='text-h1Color text-[25px] font-semibold'>Cardiology</h1>
                    <p className='mt-5  text-pColor'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p className='mt-10 text-pColor'>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                </div>
                    : null}
                {active === 1 ? <div className=' w-full 800px:w-[50%] pt-10 800px:pt-0'>
                    <h1 className='text-h1Color text-[25px] font-semibold'>Neurology</h1>
                    <p className='mt-5  text-pColor'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p className='mt-10 text-pColor'>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                </div>
                    : null}
                {active === 2 ? <div className=' w-full 800px:w-[50%] pt-10 800px:pt-0'>
                    <h1 className='text-h1Color text-[25px] font-semibold'>Hepatology</h1>
                    <p className='mt-5  text-pColor'>Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                    <p className='mt-10 text-pColor'>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                </div>
                    : null}
                {active === 3 ? <div className=' w-full 800px:w-[50%] pt-10 800px:pt-0'>
                    <h1 className='text-h1Color text-[25px] font-semibold'>Pediatrics</h1>
                    <p className='mt-5  text-pColor'>Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                    <p className='mt-10 text-pColor'>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                </div>
                    : null}
                {active === 4 ? <div className=' w-full 800px:w-[50%] pt-10 800px:pt-0'>
                    <h1 className='text-h1Color text-[25px] font-semibold'>Eye Care</h1>
                    <p className='mt-5  text-pColor'>Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                    <p className='mt-10 text-pColor'>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                </div>
                    : null}
                {active === 0 ? <div className='w-full pt-5 800px:pt-0 800px:w-[20%]'>
                    <img src={CardiologyImg} alt="CardiologyImg" />
                </div>
                    : null}
                {active === 1 ? <div className='w-full pt-5 800px:pt-0 800px:w-[20%]'>
                    <img src={NeurologyImg} alt="NeurologyImg" />

                </div>
                    : null}
                {active === 2 ? <div className='w-full pt-5 800px:pt-0 800px:w-[20%]'>
                    <img src={HepatologyImg} alt="HepatologyImg" />
                </div>
                    : null}
                {active === 3 ? <div className='w-full pt-5 800px:pt-0 800px:w-[20%]'>
                    <img src={PediatricsImg} alt="PediatricsImg" />

                </div>
                    : null}
                {active === 4 ? <div className='w-full pt-5 800px:pt-0 800px:w-[20%]'>
                    <img src={EyeCareImg} alt="EyeCareImg" />

                </div>
                    : null}
            </div>
        </div>
    );
};

export default Departments;