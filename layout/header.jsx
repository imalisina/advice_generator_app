import React from 'react';
import Head from 'next/head';

const Header = () => {
    return (
        <>
            {/* Header title */}
            <Head>
                <title>Advice Generator | @imalisina</title>
            </Head>

            {/* Main body -  navbar section */}
            <nav className="px-2 py-5 w-full text-center">
                <div className="text-5xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-pink-400">
                    Advice Generator
                </div>
                <div className='text-gray-400 mt-2'>
                    Small and fast web application that generates advice for everyone !
                </div>
            </nav>
        </>
    );
}

export default Header;