'use client'

import Image from 'next/image';
import Link from "next/link";
import bar from "../public/bar.svg"


export function MainHeader() {
    return (
        <>
            <div className='grid grid-cols-3 bg-zinc-200 font-bold xl:hidden'>
                <Image className="p-1 self-center" alt="" src={bar} />
                <h1 className="justify-self-center font-serif p-1 text-xl">.Think</h1>
            </div>
            <div className='hidden xl:flex flex-col'>
                <div className='container mx-auto'>
                    <h1 className="justify-self-center font-serif text-5xl font-bold p-6">.Think</h1>
                </div>
                <div className='container mx-auto'>
                    <ul className='flex w-full items-center justify-center space-x-8 gap-4 font-bold text-2xl border-y-2'>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/games">Games</Link>
                        </li>
                        <li><Link href="/story">Story</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/ideas">Inspiration</Link></li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}