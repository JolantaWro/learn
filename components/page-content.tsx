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
                <div className='md:grid md:grid-cols-2'>
                    <AboutPage />
                    <GamesList />
                    <Advertisement />
                </div>
                <BlogContent />
            </div>
        </>
    )
}