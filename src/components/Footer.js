import Link from 'next/link';
import React from 'react';

function Footer() {

    return (
        <div>
            <footer className="p-4 dark:bg-black md:p-8 lg:p-10 md:flex-none shadow-in">
                <div className="mx-auto max-w-screen-xl text-center dark:text-white">
                    <p className="my-6 NType82">Education is the passport to the future, for tomorrow belongs to those who prepare for it today. – Malcolm X</p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 Ndot">
                        <li>
                            <Link href="/" className="mr-4 hover:underline md:mr-6">HOME</Link>
                        </li>
                        <li>
                            <Link href="/about" className="mr-4 hover:underline md:mr-6">ABOUT</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="mr-4 hover:underline md:mr-6 ">CONTACT</Link>
                        </li>
                        <li>
                            <Link href="/resource" className="mr-4 hover:underline md:mr-6">RESOURCE</Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://www.youtube.com/@Sciencemadness?sub_confirmation=1" className="mr-4 hover:underline md:mr-6">YOUTUBE</Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://www.instagram.com/strange_evil_3_/" className="mr-4 hover:underline md:mr-6">INSTAGRAM</Link>
                        </li>
                    </ul>
                    <span className="NType82 text-sm sm:text-center dark:text-gray-400">© 2023-2024 <Link href="/" className="hover:underline">ScienceMadness</Link> & <Link href="/" className="hover:underline">VSoft</Link>. All Rights Reserved.</span>
                </div>
            </footer >
        </div >
    );
}

export default Footer;
