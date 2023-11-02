import { AiOutlineArrowUp } from 'react-icons/ai';
import './App.css';
import HomePage from './components/HomePage.js';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      setActive(true)
    } else {
      setActive(false)
    }
  })
  const toUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='font-Roboto'>
      {
        active ? (
          <div onClick={() => toUp()} className='fixed right-5 bottom-5 cursor-pointer rounded-md w-10 h-10 bg-[#1977cc] hover:bg-[#4d91cc] flex justify-center items-center' style={{ transition: "0.5s" }} >
            <AiOutlineArrowUp size={25} color='white' />
          </div>
        ) : null}
      <HomePage />
    </div>
  );
}
export default App;
