'use client'

import Image from 'next/image';
import Link from "next/link";
import mainView from "../public/puzzle.jpg"
import { GamesList } from './landingPage/games-list';
import { Advertisement } from './landingPage/advertisement';


export function MainContent() {
    return (
        <>
            <div className='container mx-auto'>
                <section className='px-4 mt-8'>
                    <Image className="" alt="" src={mainView} />
                    <h2 className='font-bold text-xl mt-6'>.Thing is a platform with simple games for everyone</h2>
                    <h3 className='text-xl '>try it!</h3>
                </section>
                <GamesList />
                <Advertisement />
            </div>
        </>
    )
}