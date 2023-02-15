import React from 'react';

const Header = () => {
    return (
        <>
            <nav class="px-2 py-5 w-full text-center">
                <div class="text-5xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-pink-400">
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