'use client'

import Image from 'next/image';
import Link from "next/link";
import facebook from "../public/Facebook.png"
import instagram from "../public/Instagram.png"


export function MainFooter() {
    return (
        <>
            <div className='bg-gray-400 pt-10'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center gap-4 mt-6 text-zinc-100'>
                        <Link href="/not-found" target="_blank" className='text-lg font-medium'>Statute</Link>
                        <Link href="/not-found" target="_blank" className='text-lg font-medium'>Privacy Policy</Link>
                        <Link href="/not-found" target="_blank" className='text-lg font-medium'>Paths</Link>
                    </div>
                    <div className='flex items-center justify-center gap-4 mt-6 pb-6'>
                        <Image className="w-8 h-8" alt="Facebook Logo" src={facebook} />
                        <Image className="w-8 h-8" alt="Instagram Logo" src={instagram} />
                    </div>
                </div>
                
                <div className='flex py-6 bg-zinc-500 h-10 items-center justify-center'>
                    <p className='text-center text-zinc-50 text-sm'>©2023 Created by JolantaWro</p>
                </div>
            </div>
        </>
    )
}