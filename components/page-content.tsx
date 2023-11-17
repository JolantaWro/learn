'use client'

import Image from 'next/image';
import Link from "next/link";
import mainView from "../public/puzzle.jpg"
import { GamesList } from './landingPage/games-list';
import { Advertisement } from './landingPage/advertisement';
import { BlogContent } from './landingPage/blog-content';
import { AboutPage } from './landingPage/page-about';


export function MainContent() {
    return (
        <>
            <div className='container mx-auto'>
                <div className='xl:grid xl:grid-rows-2'>
                    <AboutPage />
                    <GamesList />
                    <div className='md:grid md:grid-cols-2 xl:row-span-2 xl:col-span-2  xl:mt-0'> 
                        <Advertisement />
                    </div>
                   
                </div>
                <BlogContent />
            </div>
        </>
    )
}