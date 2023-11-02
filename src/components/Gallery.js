import React, { useState } from 'react';
import styles from '../styles/styles';
import img1 from '../assets/imgs/gallery/gallery-1.jpg';
import img2 from '../assets/imgs/gallery/gallery-2.jpg';
import img3 from '../assets/imgs/gallery/gallery-3.jpg';
import img4 from '../assets/imgs/gallery/gallery-4.jpg';
import img5 from '../assets/imgs/gallery/gallery-5.jpg';
import img6 from '../assets/imgs/gallery/gallery-6.jpg';
import img7 from '../assets/imgs/gallery/gallery-7.jpg';
import img8 from '../assets/imgs/gallery/gallery-8.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
const Gallery = () => {
  let images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8
  ]
  const [open, setOpen] = useState(false)
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null)

  const openImg = (img, index) => {
    setOpen(true);
    setSelectedImg(img);
    setCurrentImgIndex(index);
  };

  const goToPreviousImg = () => {
    if (currentImgIndex > 0) {
      const previousImgIndex = currentImgIndex - 1;
      setSelectedImg(images[previousImgIndex]);
      setCurrentImgIndex(previousImgIndex);
    }
  };

  const goToNextImg = () => {
    if (currentImgIndex < images.length - 1) {
      const nextImgIndex = currentImgIndex + 1;
      setSelectedImg(images[nextImgIndex]);
      setCurrentImgIndex(nextImgIndex);
    }
  };
  return (
    <>
      <div className={`${styles.section} py-10 `}>
        <h1 className={`${styles.h1} text-h1Color`}>Gallery</h1>
        <div className='text-center flex items-center justify-center my-5'>
          <hr className='border-y-2 w-[53px]' />
          <hr className='border-y-2 w-[53px] border-[#1977cc] ' />
          <hr className='border-y-2 w-[53px]' />
        </div>
        <p className='text-gray-500 text-center font-semibold pb-10'>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-0.5 p-3">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => openImg(img, index)}
            className="overflow-hidden cursor-pointer"
          >
            <img
              className="hover:scale-110"
              style={{ transition: 'all 0.5s' }}
              src={img}
              alt={`img${index + 1}`}
            />
          </div>
        ))}
      </div>
      {open &&
        <>
          <div className="w-full fixed bg-[#000000] 800px:bg-[#000000d5] z-20 h-full top-0 left-0">
            <RxCross1 size={30} className='bg-black fixed  right-5 800px:right-10 top-10 text-gray-300 hover:text-white hover:cursor-pointer' onClick={() => setOpen(false)} />
            <div className='flex justify-between relative 800px:top-[10%] top-[30%]'>
              <FaArrowLeft
                className={`${currentImgIndex === 0 ? "text-gray-950" : 'text-white cursor-pointer'} hidden 800px:block relative top-[300px] -right-5`}
                size={30}
                onClick={goToPreviousImg} />
              <img src={selectedImg} className='' alt="" />
              <FaArrowRight
                className={`${currentImgIndex === 7 ? "text-gray-950" : 'text-white cursor-pointer'} hidden 800px:block relative top-[300px] -left-5`}
                size={30}
                onClick={goToNextImg}
              />
            </div>
          </div>
        </>

      }
    </>

  );
};

export default Gallery;