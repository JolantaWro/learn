'use client'

import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from "react";

export function WordsGame() {

    const firstWord = ["mama", "tata", "Hania", "Zosia", "Babcia"]
    const [words, setWords] = useState(firstWord)
    const [isRuning, setIsRuning] = useState(false)
    const [index, setIndex] = useState(0);

    const setNumberIndex = () => setIndex(i => i + 1);

    // useEffect(() => {
    //     let intervalWords;
    //     if(isRuning) {
    //         intervalWords = setInterval(setNumberIndex, 3000);
    //     }
    //     return () => clearInterval(intervalWords);
    // }, [isRuning])






    return (
        <>
             <div>
                <h1 className="wordsView">{words[index % words.length]}</h1>
            </div>
            <button onClick={()=>setIsRuning(true)} className="">Start</button>
            <button onClick={()=>setIsRuning(false)} className="">Stop</button>
        </>
    )
}