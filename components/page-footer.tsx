'use client'

import Image from 'next/image';
import Link from "next/link";
import facebook from "../public/Facebook.png"
import instagram from "../public/Instagram.png"


export function MainFooter() {
    return (
        <>
            <div className='bg-zinc-400 mt-4'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center gap-4 mt-6 text-zinc-100'>
                        <Link href="/not-found" target="_blank">Statute</Link>
                        <Link href="/not-found" target="_blank">Privacy Policy</Link>
                        <Link href="/not-found" target="_blank">Paths</Link>
                    </div>
                    <div className='flex items-center justify-center gap-4 mt-6 pb-6'>
                        <Image className="w-6 h-6" alt="Facebook Logo" src={facebook} />
                        <Image className="w-6 h-6" alt="Instagram Logo" src={instagram} />
                    </div>
                </div>
                
                <div className='flex mt-2 bg-zinc-500 h-10 items-center justify-center'>
                    <p className='text-center text-zinc-50 text-xs'>©2023 Created by JolantaWro</p>
                </div>
            </div>
        </>
    )
}