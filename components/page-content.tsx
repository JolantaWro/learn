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
            <div className='container mx-auto xl:grid xl:grid-col-12'>
                <AboutPage />
                <GamesList />
                <div className='md:grid md:grid-cols-2'> 
                    <Advertisement />
                </div>
                <BlogContent />
            </div>
        </>
    )
}