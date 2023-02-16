import React, { useEffect, useState } from 'react';
// Package to handle HTTP requests
import Axios from 'axios';

// Loading component
import Loading from './loading';

const AdviceCardContainer = () => {
    // Define a state to store generated advice
    const [generatedAdvice, setGeneratedAdvice] = useState("");
    // Define a state to toggle generate new advice button
    const [generateNextAdvice, setGenerateNextAdvice] = useState(false);
    // Define a state to toggle loading status
    const [isLoading, setIsLoading] = useState(false);

    // Define a method to handle the API request
    const adviceGenerator = async () => {
        setIsLoading(true);
        await Axios.get("https://api.adviceslip.com/advice").then((res) => {
            setGenerateNextAdvice(false);
            setGeneratedAdvice(res.data.slip.advice);
        }).finally(() => {
            setIsLoading(false);
            setTimeout(() => {
                setGenerateNextAdvice(true);
            }, 1500);
        });
    }

    useEffect(() => {
        adviceGenerator();
    }, [])

    return (
        <div className='mt-5'>
            {
                !isLoading && generatedAdvice != ""
                    ? (
                        <div className="bg-black max-w-sm p-6 mx-auto border border-gray-400 shadow rounded-lg">
                            <h5 className="mb-2 text-3xl text-center font-bold tracking-tight text-white">
                                Your advice
                            </h5>
                            <p className="block text-center mx-auto my-5 mb-3 font-normal text-white">{generatedAdvice}</p>
                            <button disabled={!generateNextAdvice} type='button' onClick={() => adviceGenerator()} className={`block mx-auto px-3 py-2 text-sm font-medium text-center text-white rounded-lg ${generateNextAdvice ? "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" : "bg-gray-500 cursor-no-drop"}`}>
                                Generate New advice
                            </button>
                        </div>
                    ) : (<Loading />)
            }
        </div>
    );
}

export default AdviceCardContainer;