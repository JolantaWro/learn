'use client'

import { GamesList } from './landingPage/games-list';
import { Advertisement } from './landingPage/advertisement';
import { BlogContent } from './landingPage/blog-content';
import { AboutPage } from './landingPage/page-about';


export function MainContent() {
    return (
        <>
           <div className='container mx-auto'>
                <div className='xl:grid xl:grid-cols-12'>
                    <div className='xl:col-span-8'>
                        <AboutPage />
                    </div>
                    <div className='xl:col-span-4'>
                        <div className='xl:grid xl:grid-cols-12'>
                            <div className='xl:col-span-12'>
                                <GamesList />
                            </div>
                            <div className='xl:col-span-12'>
                                <Advertisement />
                            </div>
                        </div>
                    </div>
                </div>
                <BlogContent />
            </div>
        </>
    )
}