import React from 'react'
import styles from '../styles/styles'

const Hero = () => {
    return (
        <section id='Home' className='bg-hero bg-no-repeat bg-cover h-[700px] bg-center'>
            <div className={`${styles.section} pt-16`}>
                <h1 className='text-[32px] font-bold leading-[56px] text-[#2c4964] 800px:text-[48px] '>WELCOME TO MEDILAB</h1>
                <p className='text-[#2c4964] my-4 mb-8 text-[20px] 800px:text-[24px] '>We are team of talented designers making websites with Bootstrap</p>
                <a href='#About' className={`${styles.button}`}>GET STARTED</a>
            </div>
        </section>
    )
}

export default Hero