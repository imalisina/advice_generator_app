import React from 'react';
import Link from 'next/link';

function HeroContainer() {
    return (
        <>
            {/* Background image section */}
            <div className='overlay'>
                <div className="bg-[url('https://cdn.fansshare.com/photograph/topmovielist/best-comedy-movies-list-movies-1784588135.jpg')] w-full h-96 bg-repeat bg-contain brightness-50">
                </div>
            </div>

            {/* Hero contents section */}
            <div className='w-full absolute z-10 top-40 text-red-400 font-extrabold mx-auto text-4xl z-10'>
                {/* Title and sub-title section */}
                <h1 className="text-center mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-indigo-400">Find New Movies</span> With Cinemia !</h1>
                <p className="w-3/6 text-center mx-auto text-lg font-normal text-gray-50 lg:text-xl">
                    Search and explore new movies and TV shows with Cinemia and find your movie for tonight in less than 2 minutes !
                </p>

                {/* Buttons section */}
                <div className='w-full text-center my-4'>
                    <Link href={"/pricing"} className="text-white bg-gradient-to-br from-pink-600 to-indigo-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
                        Pricing Plans
                    </Link>
                </div>
            </div>


        </>
    )
}

export default HeroContainer