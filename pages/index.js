import React, { useEffect, useState } from 'react';

// Package to handle HTTP requests
import Axios from 'axios';


// https://api.adviceslip.com/advice
export default function Home() {
  // Define a state to store generated advice
  const [generatedAdvice, setGeneratedAdvice] = useState("");
  return (
    <>
      <h1 className='text-white mx-auto text-center'>hellow</h1>
    </>
  )
}
