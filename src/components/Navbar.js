"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className='sticky left-0 top-0 w-full z-10 ease-in duration-300 dark:bg-black Ndot bg-white shadow-md'>
                <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 dark:text-white text-black'>
                    <div href='/'>
                        <h1 className='font-bold text-4xl hover:text-gray-300'>
                            <Link href='/'>SCIENCEMADNESS</Link >
                        </h1>
                    </div>
                    <ul className='hidden sm:flex'>
                        <li className='p-4 hover:text-gray-300'>
                            <Link href='/' >HOME</Link>
                        </li>
                        <li className='p-4 hover:text-gray-300'>
                            <Link href='/about'>ABOUT</Link>
                        </li>
                        <li className='p-4 hover:text-gray-300'>
                            <Link href='/contact'>CONTACT</Link>
                        </li>
                        <li className='p-4 hover:text-gray-300'>
                            <Link href='/resource'>RESOURCE</Link>
                        </li>
                    </ul>

                    {/* Mobile Button */}
                    <div onClick={handleNav} className='block sm:hidden z-10 '>
                        {nav ? (
                            <AiOutlineClose size={20} />
                        ) : (
                            <AiOutlineMenu size={20} />
                        )}
                    </div>
                    {/* Mobile Menu */}
                    <div
                        className={
                            nav
                                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
                                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        }
                    >
                        <ul>
                            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/'>HOME</Link>
                            </li>
                            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/about'>ABOUT</Link>
                            </li>
                            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/contact'>CONTACT</Link>
                            </li>
                            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/resource'>RESOURCE</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Navbar;
