import React from 'react';

// Main component
import SearchBar from './searchBar';

const SearchMovieContainer = () => {
    return (
        <>
            {/* Title */}
            <h2 className="my-6 text-center text-3xl font-bold leading-none tracking-tight text-gray-700 md:text-4xl">Let's start for free !</h2>
            {/* Movie search input */}
            <SearchBar />
        </>
    );
}

export default SearchMovieContainer;