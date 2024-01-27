'use client'

import Image from 'next/image';
import Link from "next/link";
import { PopularListGamesData } from '@/config/popular-games-list';


export function GamesList() {
    return (
        <>
            <section className='px-4 mt-8'>
                <h3 className='font-bold text-lg text-center border shadow-md xl:w-[400px] xl:m-auto'>Popular</h3>
                <div className='md:grid md:grid-cols-2 xl:grid-cols-1'>
                {
                    PopularListGamesData.map((data, index) => (
                        <GameElement
                            imageUrl={data.imageUrl}
                            href={data.href}
                            title={data.title}
                            description={data.description}
                            key={`game-${index}`}
                        />
                    ))
                }
                </div>
            </section>
        </>
    )
}

type ListGamesProps = {
    imageUrl: any,
    href: string,
    title: string,
    description: string
}

const GameElement = ({ imageUrl, href, title, description }: ListGamesProps) => {
    return (
        <div className='border-b-[1px] py-4 border-zinc-400 hover:bg-gray-100'>
            <Link href={href}>
                <div className='flex h-32'>
                    <Image className="w-1/3 rounded-lg object-cover" alt="abacus" src={imageUrl} />
                    <div className='ml-3'>
                        <h3 className='font-bold text-lg'>{title}</h3>
                        <p className='text-lg'>{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}