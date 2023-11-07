import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from '../styles/styles';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import testimonials1 from '../assets/imgs/testimonials/testimonials-1.jpg'
import testimonials2 from '../assets/imgs/testimonials/testimonials-2.jpg'
import testimonials3 from '../assets/imgs/testimonials/testimonials-3.jpg'
import testimonials4 from '../assets/imgs/testimonials/testimonials-4.jpg'
import testimonials5 from '../assets/imgs/testimonials/testimonials-5.jpg'

const Swiperr = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            breakpoints={{
                800: {
                    slidesPerView: 2,
                },
            }}
        >
            <SwiperSlide>
                <div className={`${styles.section} 800px:px-20 py-24 `}>
                    <div className='flex flex-col 800px:flex-row w-full 800px:justify-between transition duration-75 ease-out'>
                        <div className='mb-5 800px:mb-0 relative p-10 bg-white shadow-2xl w-full 800px:w-[100%]'>
                            <div className='800px:float-left'>
                                <img src={testimonials1} alt="testimonials1" className='800px:absolute w-[80px] rounded-md top-6 -left-12' />
                            </div>
                            <div className='ms-2'>
                                <h2 className='font-semibold text-[22px]'>Saul Goodman</h2>
                                <p className='text-[#999] text-[16px]'>Ceo & Founder</p>
                                <p className='flex '>
                                    <span><BiSolidQuoteAltLeft className='pb-2' size={35} color='#badaf7' /></span>
                                    Proin iaculis purus consequat sem cure dignissim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                </p>
                                <span><BiSolidQuoteAltRight size={35} color='#badaf7' /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.section} 800px:px-20 py-24`}>
                    <div className='flex flex-col 800px:flex-row w-full 800px:justify-between transition duration-75 ease-out'>
                        <div className='mb-5 800px:mb-0 relative p-10 bg-white shadow-2xl w-full 800px:w-[100%]'>
                            <div className='800px:float-left'>
                                <img src={testimonials2} alt="testimonials2" className='800px:absolute w-[80px] rounded-md top-6 -left-12' />
                            </div>
                            <div className='ms-2'>
                                <h2 className='font-semibold text-[22px]'>Sara Wilsson</h2>
                                <p className='text-[#999] text-[16px]'>Designer</p>
                                <p className='flex '>
                                    <span><BiSolidQuoteAltLeft className='pb-2' size={35} color='#badaf7' /></span>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                </p>
                                <span><BiSolidQuoteAltRight size={35} color='#badaf7' /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.section} 800px:px-20 py-24`}>
                    <div className='flex flex-col 800px:flex-row w-full 800px:justify-between transition duration-75 ease-out'>
                        <div className='mb-5 800px:mb-0 relative p-10 bg-white shadow-2xl w-full 800px:w-[100%]'>
                            <div className='800px:float-left'>
                                <img src={testimonials3} alt="testimonials3" className='800px:absolute w-[80px] rounded-md top-6 -left-12' />
                            </div>
                            <div className='ms-2'>
                                <h2 className='font-semibold text-[22px]'>jena karlis</h2>
                                <p className='text-[#999] text-[16px]'>Store Owner</p>
                                <p className='flex '>
                                    <span><BiSolidQuoteAltLeft className='pb-2' size={35} color='#badaf7' /></span>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                </p>
                                <span><BiSolidQuoteAltRight size={35} color='#badaf7' /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.section} 800px:px-20 py-24`}>
                    <div className='flex flex-col 800px:flex-row w-full 800px:justify-between transition duration-75 ease-out'>
                        <div className='mb-5 800px:mb-0 relative p-10 bg-white shadow-2xl w-full 800px:w-[100%]'>
                            <div className='800px:float-left'>
                                <img src={testimonials4} alt="testimonials4" className='800px:absolute w-[80px] rounded-md top-6 -left-12' />
                            </div>
                            <div className='ms-2'>
                                <h2 className='font-semibold text-[22px]'>Matt Brandon</h2>
                                <p className='text-[#999] text-[16px]'>freelancer</p>
                                <p className='flex '>
                                    <span><BiSolidQuoteAltLeft className='pb-2' size={35} color='#badaf7' /></span>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                </p>
                                <span><BiSolidQuoteAltRight size={35} color='#badaf7' /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.section} 800px:px-20 py-24`}>
                    <div className='flex flex-col 800px:flex-row w-full 800px:justify-between transition duration-75 ease-out'>
                        <div className='mb-5 800px:mb-0 relative p-10 bg-white shadow-2xl w-full 800px:w-[100%]'>
                            <div className='800px:float-left'>
                                <img src={testimonials5} alt="testimonials5" className='800px:absolute w-[80px] rounded-md top-6 -left-12' />
                            </div>
                            <div className='ms-2'>
                                <h2 className='font-semibold text-[22px]'>John Larson</h2>
                                <p className='text-[#999] text-[16px]'>Entrepreneur</p>
                                <p className='flex '>
                                    <span><BiSolidQuoteAltLeft className='pb-2' size={35} color='#badaf7' /></span>
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                </p>
                                <span><BiSolidQuoteAltRight size={35} color='#badaf7' /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.section} 800px:px-20 py-24 `}>
                    <div className='flex flex-col 800px:flex-row w-full 800px:justify-between transition duration-75 ease-out'>
                        <div className='mb-5 800px:mb-0 relative p-10 bg-white shadow-2xl w-full 800px:w-[100%]'>
                            <div className='800px:float-left'>
                                <img src={testimonials1} alt="testimonials1" className='800px:absolute w-[80px] rounded-md top-6 -left-12' />
                            </div>
                            <div className='ms-2'>
                                <h2 className='font-semibold text-[22px]'>Saul Goodman</h2>
                                <p className='text-[#999] text-[16px]'>Ceo & Founder</p>
                                <p className='flex '>
                                    <span><BiSolidQuoteAltLeft className='pb-2' size={35} color='#badaf7' /></span>
                                    Proin iaculis purus consequat sem cure dignissim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                </p>
                                <span><BiSolidQuoteAltRight size={35} color='#badaf7' /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Swiperr;
