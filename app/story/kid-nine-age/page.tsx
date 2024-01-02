import { WordsGame } from "@/components/games/words";
import { Story2 } from "@/components/story/story-2";
import { PopularListGamesData } from '@/config/popular-games-list';
import Image from 'next/image';
import Link from "next/link";


export default function KidsNineAgeMain() {
    return (
      <main className="container mx-auto">
        <div className="px-30 py-10 flex flex-col items-center gap-10">
          <h1 className="text-5xl">List of stories for children</h1>

          <div className='px-4 mt-8'>
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
            </div>


        </div>
         

      </main>
    )
  }
  


  // <Story2 />

type ListGamesProps = {
    imageUrl: any,
    href: string,
    title: string,
    description: string
}

const GameElement = ({ imageUrl, href, title, description }: ListGamesProps) => {
    return (
        <div className='border-b-[1px] py-4 border-zinc-400'>
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