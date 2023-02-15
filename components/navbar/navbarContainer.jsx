import React from 'react';
import Link from 'next/link';

const NavbarContainer = () => {
    return (
        <nav className="bg-white mx-10 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href={"/"}>
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-indigo-400">Cinemia</span>
                </Link>
                <div className="w-full md:block md:w-auto">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <Link href={"/pricing"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0">Pricing</Link>
                        </li>
                        <li>
                            <Link href={"/about"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0">About us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarContainer;