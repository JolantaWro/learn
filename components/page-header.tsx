'use client'

import Image from 'next/image';
import Link from "next/link";
import bar from "../public/bar.svg"


export function MainHeader() {
    return (
        <>
            <div className='grid grid-cols-3 bg-zinc-200 font-bold xl:invisible'>
                <Image className="p-1 self-center" alt="" src={bar} />
                <h1 className="justify-self-center font-serif p-1 text-xl">.Think</h1>
            </div>
            <div className='flex flex-col sm:invisible xl:visible'>
                <div>
                    <h1 className="justify-self-center font-serif p-1 text-2xl">.Think</h1>
                </div>
            </div>
        </>
    )
}