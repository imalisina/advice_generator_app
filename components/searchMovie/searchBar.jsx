import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Other components
import Loading from './loading';
import MovieDetails from './movieDetails';
import MoviePlaceholder from './moviePlaceholder';

const SearchBar = () => {
    // API KEY from OMDb API
    const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=b65528dd";

    // Define a state to store movie search query
    const [movieQuery, setMovieQuery] = useState("");
    // Define a state to store the searched movie data
    const [searchedMovie, setSearchedMovie] = useState([]);
    // Define a constant to store the error messages
    const errorMsg = "Invalid movie keyword.";
    // Define a state to check error status
    const [hasError, setHasError] = useState(false);
    // Define a state to toggle loading status
    const [isLoading, setLoading] = useState(false);

    // Define a method to handle API call operation
    const handler = async () => {
        setLoading(true);
        setSearchedMovie([]);
        await axios.get(`${API_KEY}&t=${movieQuery}`).then((response) => {
            if (!response.data.Error) {
                setSearchedMovie(response.data);
            } else {
                setHasError(true);
            }
        }).finally(() => {
            setMovieQuery("");
            setLoading(false);
        });

        setTimeout(() => setHasError(false), 1000);
    }

    useEffect(() => {
        console.log(searchedMovie);
    }, [isLoading]);

    return (
        <div className='my-5 w-4/5 mx-auto'>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input disabled={isLoading} onBlur={(event) => setMovieQuery(event.target.value)} placeholder="Search Movies, TV Shows, Series, etc." className={`block w-full p-4 pl-10 text-sm border ${hasError ? "border-red-400 text-red-500 font-semibold" : "border-gray-300 text-gray-900"} outline-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500`} />
                <button disabled={isLoading} onClick={() => handler()} className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2">
                    {/* Display search text or loading */}
                    {
                        isLoading
                            ? (<Loading />)
                            : "Search"
                    }
                </button>
            </div>
            {/* Check the conditions to show whether movie details or placeholder (Skeleton) */}
            {
                searchedMovie.length != 0 && !hasError
                    ? (<MovieDetails movieData={searchedMovie} />)
                    : isLoading
                        ? (<MoviePlaceholder />)
                        : hasError &&
                        (
                            // Handling errors
                            <p className="mt-2 text-sm text-red-600">
                                <span className="font-medium">{errorMsg}</span> Please try again!
                            </p>
                        )
            }
        </div>
    );
}

export default SearchBar;