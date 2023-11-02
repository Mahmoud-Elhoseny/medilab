import React, { useState } from 'react'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import styles from '../styles/styles'
import testimonials1 from '../assets/imgs/testimonials/testimonials-1.jpg'
import testimonials2 from '../assets/imgs/testimonials/testimonials-2.jpg'
import testimonials3 from '../assets/imgs/testimonials/testimonials-3.jpg'
import testimonials4 from '../assets/imgs/testimonials/testimonials-4.jpg'
import testimonials5 from '../assets/imgs/testimonials/testimonials-5.jpg'

const Carousel = () => {
    const [active, setActive] = useState(0)

    const slides = [
        [
            {
                title: 'Saul Goodman',
                paragraph: 'Ceo & Founder',
                span: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
                img: testimonials1,
            },
            {
                title: 'Sara Wilsson',
                paragraph: 'Designer',
                span: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
                img: testimonials2,
            },
        ],
        [
            {
                title: 'Sara Wilsson',
                paragraph: 'Designer',
                span: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
                img: testimonials2,
            },
            {
                title: 'jena karlis',
                paragraph: 'Store Owner',
                span: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
                img: testimonials3,
            },
        ],
        [
            {
                title: 'jena karlis',
                paragraph: 'Store Owner',
                span: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
                img: testimonials3,
            },
            {
                title: 'Matt Brandon',
                paragraph: 'freelancer',
                span: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
                img: testimonials4,
            },
        ],
        [
            {
                title: 'Matt Brandon',
                paragraph: 'freelancer',
                span: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
                img: testimonials4,
            },
            {
                title: 'John Larson',
                paragraph: 'Entrepreneur',
                span: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
                img: testimonials5,
            },
        ],
        [
            {
                title: 'John Larson',
                paragraph: 'Entrepreneur',
                span: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
                img: testimonials5,
            },
            {
                title: 'Saul Goodman',
                paragraph: 'Ceo & Founder',
                span: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
                img: testimonials1,
            },
        ]
    ];
    return (
        <div className={`${styles.section} 800px:px-20 py-24`}>
            <div className='flex flex-col 800px:flex-row w-full 800px:justify-between transition duration-75 ease-out'>
                {slides[active].map((slide, index) => (
                        <div key={index} className='mb-5 800px:mb-0 relative p-10 bg-white shadow-2xl w-full 800px:w-[46%] '>
                            <div className='800px:float-left '>
                                <img src={slide.img} alt="" className='800px:absolute w-[80px] rounded-md top-6 -left-12' />
                            </div>
                            <div className='ms-2'>
                                <h2 className='font-semibold text-[22px]'>{slide.title}</h2>
                                <p className='text-[#999] text-[16px]'>{slide.paragraph}</p>
                                <p className='flex '>
                                    <span ><BiSolidQuoteAltLeft className='pb-2' size={35} color='#badaf7' /></span>
                                    {slide.span}
                                </p>
                                <span><BiSolidQuoteAltRight size={35} color='#badaf7' /></span>
                            </div>
                        </div>
                ))}
            </div>
            <div className='flex justify-center items-center pt-5' style={{ transition: "0.5s" }}>
                <span style={{ transition: "0.5s" }} onClick={() => setActive(0)} className={`${active === 0 ? ' bg-blue-700 w-[15px] me-2 cursor-pointer h-[15px] rounded-full block border border-blue-700' : "w-[15px] me-2 cursor-pointer h-[15px] rounded-full block border border-blue-700"}`}></span>
                <span style={{ transition: "0.5s" }} onClick={() => setActive(1)} className={`${active === 1 ? ' bg-blue-700 w-[15px] me-2 cursor-pointer h-[15px] rounded-full block border border-blue-700' : "w-[15px] me-2 cursor-pointer h-[15px] rounded-full block border border-blue-700"}`}></span>
                <span style={{ transition: "0.5s" }} onClick={() => setActive(2)} className={`${active === 2 ? ' bg-blue-700 w-[15px] me-2 cursor-pointer h-[15px] rounded-full block border border-blue-700' : "w-[15px] me-2 cursor-pointer h-[15px] rounded-full block border border-blue-700"}`}></span>
                <span style={{ transition: "0.5s" }} onClick={() => setActive(3)} className={`${active === 3 ? ' bg-blue-700 w-[15px] me-2 cursor-pointer h-[15px] rounded-full block border border-blue-700' : "w-[15px] me-2 cursor-pointer h-[15px] rounded-full block border border-blue-700"}`}></span>
                <span style={{ transition: "0.5s" }} onClick={() => setActive(4)} className={`${active === 4 ? ' bg-blue-700 w-[15px] me-2 cursor-pointer h-[15px] rounded-full block border border-blue-700' : "w-[15px] me-2 cursor-pointer h-[15px] rounded-full block border border-blue-700"}`}></span>
            </div>
        </div>
    )
}
  
export default Carousel
