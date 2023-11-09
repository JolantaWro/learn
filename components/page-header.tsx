'use client'

import Image from 'next/image';
import Link from "next/link";
import bar from "../public/bar.svg"


export function MainHeader() {
    return (
        <>
            <div className='grid grid-cols-3 bg-zinc-400 font-bold'>
                <Image className="" alt="" src={bar} />
                <h1 className="justify-self-center">.Think</h1>
            </div>
        </>
    )
}