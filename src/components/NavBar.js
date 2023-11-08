import React, { useState } from 'react'
import styles from '../styles/styles'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

const NavBar = ({ active }) => {
    const [open, setOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`${active === true ? "shadow-sm  fixed top-0 z-10 bg-white w-[100%] " : null} ${styles.section} py-8`} style={{ transition: "all 0.5s" }}>
            <div className='flex justify-between items-center'>
                <div>
                    <a className={`${active === true ? "ml-16" : null} font-bold text-3xl`} style={{ color: "rgb(44, 73, 100)" }} href='#Medilab'>Medilab</a>
                </div>
                <div className='hidden 800px:flex w-[60%]'>
                    <ul className='flex' style={{ color: 'rgb(44, 73, 100)' }}>
                        <li className='me-5'><a href='#Home' className='hover:text-blue-500'>Home</a></li>
                        <li className='me-5'><a href='#About' className='hover:text-blue-500'>About</a></li>
                        <li className='me-5'><a href='#Services' className='hover:text-blue-500'>Services</a></li>
                        <li className='me-5'><a href='#Departments' className='hover:text-blue-500'>Departments</a></li>
                        <li className='me-5'><a href='#Doctors' className='hover:text-blue-500'>Doctors</a></li>
                        <div className="group inline-block relative" style={{ color: 'rgb(44, 73, 100)' }}>
                            <button className="inline-flex items-center">
                                <span className="mr-1 hover:text-blue-500">Dropdown</span>
                                <svg
                                    className="fill-current h-4 w-4 me-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                            </button>
                            <ul className="absolute hidden pt-1 group-hover:block w-[190px] bg-white" >
                                <li >
                                    <a
                                        className="hover:text-blue-500 py-2 px-4 block whitespace-no-wrap"
                                        href="#One"
                                    >Drop Down 1</a>
                                </li>
                                <li >
                                    <a
                                        className="hover:text-blue-500 py-2 px-4 block whitespace-no-wrap"
                                        href="#three"
                                    >Drop Down 2</a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-blue-500 py-2 px-4 block whitespace-no-wrap"
                                        href="#four"
                                    >Drop Down 3</a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-blue-500 py-2 px-4 block whitespace-no-wrap"
                                        href="#five"
                                    >Drop Down 4</a>
                                </li>
                            </ul>
                        </div>
                        <li className='me-3 hover:text-blue-500'><a href='#Contact'>Contact</a></li>
                        <div className='flex'>
                            <li><a href='#Appointment' className=' rounded-3xl'
                                style={{ background: "rgb(25, 119, 204) ", color: "rgb(255, 255, 255)", padding: "8px 20px" }}>
                                Make an Appointment
                            </a></li>
                        </div>
                    </ul>
                </div>
                <div className='flex 800px:hidden'>
                    <ul>
                        <li><a href='#Appointment' className=' rounded-3xl text-sm'
                            style={{ background: "rgb(25, 119, 204) ", color: "rgb(255, 255, 255)", padding: "4px 10px" }}>
                            Appointment
                        </a></li>
                    </ul>
                </div>
                {/* header sidebar*/}
                <div className='flex 800px:hidden'>
                    <AiOutlineAlignRight size={30} onClick={() => setOpen(true)} className='me-4' />
                    {
                        open && (
                            <div className="w-full fixed bg-[#0000005f] z-20 h-full top-0 left-0">
                                <div className="fixed w-[90%] bg-[#fff] h-screen top-9 left-5 z-10">
                                    <RxCross1 size={30} className=' fixed right-5 top-10' onClick={() => setOpen(false)} />
                                    <ul className="p-5">
                                        <li className="mb-4">
                                            <a href="#Home" className="hover:text-blue-500" onClick={() => setOpen(false)}>
                                                Home
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#About" className="hover:text-blue-500" onClick={() => setOpen(false)}>
                                                About
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#Services" className="hover:text-blue-500" onClick={() => setOpen(false)}>
                                                Services
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#Departments" className="hover:text-blue-500" onClick={() => setOpen(false)}>
                                                Departments
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#Doctors" className="hover:text-blue-500" onClick={() => setOpen(false)}>
                                                Doctors
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <div className="relative inline-block text-left">
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="inline-flex hover:text-blue-500 w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset"
                                                        id="menu-button"
                                                        aria-expanded={isOpen}
                                                        aria-haspopup="true"
                                                        onClick={handleDropdown}
                                                    >
                                                        Drop down
                                                        <svg
                                                            className={`-mr-14 h-5 w-40 text-gray-400 ${isOpen ? 'transform rotate-180' : ''
                                                                }`}
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                {isOpen && (
                                                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-0">
                                                        <div className="py-1" role="none">
                                                            <a
                                                                href="#1"
                                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                                role="menuitem"
                                                                tabIndex="-1"
                                                                id="menu-item-0"
                                                            >
                                                                Drop down 1
                                                            </a>
                                                            <a
                                                                href="#2"
                                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                                role="menuitem"
                                                                tabIndex="-1"
                                                                id="menu-item-1"
                                                            >
                                                                Drop down 2
                                                            </a>
                                                            <a
                                                                href="#3"
                                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                                role="menuitem"
                                                                tabIndex="-1"
                                                                id="menu-item-2"
                                                            >
                                                                Drop down 3
                                                            </a>
                                                            <a
                                                                href="#4"
                                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                                role="menuitem"
                                                                tabIndex="-1"
                                                                id="menu-item-3"
                                                            >
                                                                Drop down 4
                                                            </a>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                        <li >
                                            <a href="#Contact" className='hover:text-blue-500' onClick={() => setOpen(false)}>Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar