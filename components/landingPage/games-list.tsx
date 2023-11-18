'use client'

import Image from 'next/image';
import Link from "next/link";
import counting from "../../public/counting.jpg"
import words from "../../public/words.jpg"
import blocks from "../../public/blocks.jpg"
import story from "../../public/story.jpg"


export function GamesList() {
    return (
        <>
            <section className='px-4 mt-8'>
                <h3 className='font-bold text-lg text-center border shadow-md xl:w-[400px] xl:m-auto'>Popular Games</h3>
                <div className='md:grid md:grid-cols-2 xl:grid-cols-1'>
                    <div className='border-b-[1px] py-4 border-zinc-400'>
                        <div className='flex h-32'>
                            <Image className="w-1/3 rounded-lg object-cover" alt="abacus" src={counting} />
                            <div className='ml-3'>
                                <h3 className='font-bold text-lg'>Counting game</h3>
                                <p className='text-lg'>A game with addition, subtraction, multiplication and division depending on the level selected</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-b-[1px] py-4 border-zinc-400'>
                        <div className='flex h-32'>
                            <Image className="w-1/3 rounded-lg object-cover" alt="abacus" src={words} />
                            <div className='ml-3'>
                                <h3 className='font-bold text-lg'>Words</h3>
                                <p className='text-lg'>Learning words divided into different areas of life</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-b-[1px] py-4 border-zinc-400'>
                        <div className='flex h-32'>
                            <Image className="w-1/3 rounded-lg object-cover" alt="abacus" src={blocks} />
                            <div className='ml-3'>
                                <h3 className='font-bold text-lg'>Puzzles</h3>
                                <p className='text-lg'>Simple games for arranging or guessing pictures</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-4 md:border-b-[1px] md:border-zinc-400 xl:border-none'>
                        <div className='flex h-32'>
                            <Image className="w-1/3 rounded-lg object-cover" alt="abacus" src={story} />
                            <div className='ml-3'>
                                <h3 className='font-bold text-lg'>Story</h3>
                                <p className='text-lg'>Stories for everyone to read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}