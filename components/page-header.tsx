'use client'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image';
import Link from "next/link";
import bar from "../public/bar.svg"


export function MainHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isSmallScreen = useMediaQuery({ maxWidth: 1279 });


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='grid grid-cols-3 bg-zinc-200 font-bold xl:hidden'>
                <button className='p-1 self-center' onClick={toggleMenu}>
                    <Image alt='menu' src={bar} />
                </button>
                <h1 className='justify-self-center font-serif p-1 text-xl'>.Think</h1>
            </div>

            {!isSmallScreen && (
                <div className='hidden xl:flex flex-col'>
                    <div className='container mx-auto'>
                        <h1 className="justify-self-center font-serif text-5xl font-bold p-6 ">.Think</h1>
                    </div>
                    <div className='container mx-auto'>
                        <ul className='flex w-full items-center justify-center space-x-14 gap-4 font-bold text-3xl border-y-2'>
                            <li>
                                <Link href="/about" className='hover:text-orange-600'>About</Link>
                            </li>
                            <li>
                                <Link href="/games" className='hover:text-orange-600'>Games</Link>
                            </li>
                            <li><Link href="/story" className='hover:text-orange-600'>Story</Link></li>
                            <li><Link href="/blog" className='hover:text-orange-600'>Blog</Link></li>
                            <li><Link href="/ideas" className='hover:text-orange-600'>Inspiration</Link></li>
                        </ul>
                    </div>
                </div>
            )}
            {isSmallScreen && (
                <div className={`xl:flex flex-col ${isMenuOpen ? 'block' : 'hidden'}`}>
        
                    <div className="container mx-auto">
                        <ul className="flex flex-col items-center justify-center space-y-4 font-bold text-2xl border-y-2">
                            <li>
                                <Link href="/about" className='hover:text-orange-600'>About</Link>
                            </li>
                            <li>
                                <Link href="/games" className='hover:text-orange-600'>Games</Link>
                            </li>
                            <li>
                                <Link href="/story" className='hover:text-orange-600'>Story</Link>
                            </li>
                            <li>
                                <Link href="/blog" className='hover:text-orange-600'>Blog</Link>
                            </li>
                            <li>
                                <Link href="/ideas">Inspiration</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}